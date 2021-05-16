const path = require('path')

// =====================================================================================
// Create social media image programmatically
// https://rodrigopassos.com/posts/create-social-media-image-programatically--part-1/
// https://rodrigopassos.com/posts/create-social-media-image-programatically--part-2/

const fs = require('fs')
const MD5 = require('crypto-js/md5')
const { createCanvas, loadImage, registerFont } = require('canvas')
const { COLORS } = require('./scripts/constants')

const COLOR = {
  main: COLORS.portGore,
  highlight: COLORS.gold,
  background: COLORS.dullLavender,
}

function drawHighlight(context, line, x, y, lineHeight) {
  context.fillStyle = COLOR.highlight
  const textWidth = context.measureText(line).width
  const newX = x - textWidth / 2 - 30
  context.fillRect(newX, y - 5, textWidth + 20, lineHeight - 15)
}

function drawLine(context, line, x, y) {
  context.fillStyle = COLOR.main
  context.fillText(line, x, y)
}

function drawWrappedText(context, text, x, y, lineWidth, lineHeight) {
  let line = ''
  let newY = y
  const paragraphs = text.split('\n')
  for (let i = 0; i < paragraphs.length; i++) {
    const words = paragraphs[i].split(' ')
    for (let n = 0; n < words.length; n++) {
      const testLine = `${line + words[n]} `
      const metrics = context.measureText(testLine)
      const testWidth = metrics.width
      if (testWidth > lineWidth && n > 0) {
        drawHighlight(context, line, x, newY, lineHeight)
        drawLine(context, line, x, newY)
        line = `${words[n]} `
        newY += lineHeight + 5
      } else {
        line = testLine
      }
    }
    drawHighlight(context, line, x, newY, lineHeight)
    drawLine(context, line, x, newY)
    newY += lineHeight + 5
    line = ''
  }
}

async function createPageCover(title, slug) {
  // We'll create the image inside the public directory
  const outputFilename = `./public/${MD5(title + slug)}.png`
  // If the hash named file exists, return the string
  if (fs.existsSync(outputFilename)) {
    return outputFilename
  }
  console.log(`Creating page cover for ${slug} page`)
  // Set the font family used to write the name of the post
  registerFont(require.resolve(`./src/fonts/FiraCode-Bold.ttf`), {
    family: 'Fira Code',
  })
  // Set standard social media picture size
  const width = 1200
  const height = 630
  const maxWidth = 1000
  // 60 is the font size
  const lineHeight = 60 + 50
  const x = width / 2
  const y = 70
  // Create the canvas and get its context
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')
  // Create background
  context.fillStyle = COLOR.background
  context.fillRect(0, 0, width, height)
  // Add post title at the top of the image
  context.font = 'bold 60pt Fira Code'
  context.textBaseline = 'top'
  context.textAlign = 'center'
  drawWrappedText(context, title, x, y, maxWidth, lineHeight)
  // Add website url to the bottom of the image
  context.fillStyle = COLOR.main
  context.font = 'bold 30pt Fira Code'
  context.fillText('lavaldi.com', 650, 530)
  // Load avatar and add it to the image
  const image = await loadImage(
    require.resolve(`./content/images/lavaldi-icon.png`)
  )
  context.drawImage(image, 420, 515, 70, 70)
  // Write image to file
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(outputFilename, buffer)
  console.log(`${outputFilename} created`)
  // return hashed filename
  return outputFilename
}

// =====================================================================================

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPage = path.resolve('./src/templates/post.js')
  const pagePage = path.resolve('./src/templates/page.js')
  const tagPage = path.resolve('./src/templates/tag.js')

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                banner
                categories
                tags
                template
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const all = result.data.allMarkdownRemark.edges
  const posts = all.filter((post) => post.node.frontmatter.template === 'post')
  const pages = all.filter((post) => post.node.frontmatter.template === 'page')
  const tagSet = new Set()

  // =====================================================================================
  // Posts
  // =====================================================================================

  posts.forEach(async (post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node
    let coverPicture

    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag)
      })
    }

    if (
      !post.node.frontmatter.banner &&
      post.node.frontmatter.categories.includes('Code')
    ) {
      coverPicture = await createPageCover(
        post.node.frontmatter.title,
        post.node.fields.slug
      )
    }

    createPage({
      path: post.node.fields.slug,
      component: blogPage,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        coverPicture: coverPicture,
      },
    })
  })

  // =====================================================================================
  // Pages
  // =====================================================================================

  pages.forEach((page) => {
    createPage({
      path: page.node.fields.slug,
      component: pagePage,
      context: {
        slug: page.node.fields.slug,
      },
    })
  })

  // =====================================================================================
  // Tags
  // =====================================================================================

  const tagList = Array.from(tagSet)
  tagList.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag)}/`,
      component: tagPage,
      context: {
        tag,
      },
    })
  })
}

const createNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // =====================================================================================
  // Slugs
  // =====================================================================================

  let slug
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
      slug = `/${node.frontmatter.slug}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

exports.createPages = createPages
exports.onCreateNode = createNode

// Helpers
function slugify(str) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  )
}

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s) => new Date(s.frontmatter.date) > new Date(),
        },
      },
    }),
  ])
}
