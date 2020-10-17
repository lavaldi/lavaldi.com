import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Suggested from '../components/Suggested'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'

import config from '../utils/config'

export default function PostTemplate({ data, pageContext, ...props }) {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const { thumbnail } = post.frontmatter

  useEffect(() => {
    const theme =
      typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
        ? 'github-dark'
        : 'github-light'
  }, []) // eslint-disable-line

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <div className="container">
        <section className="grid post">
          <article>
            <header className="article-header">
              <div className="container">
                <div className="thumb">
                  {thumbnail && (
                    <Img
                      fixed={thumbnail.childImageSharp.fixed}
                      className="post-thumbnail"
                    />
                  )}
                  <h1>{post.frontmatter.title}</h1>
                </div>
                {post.frontmatter.description && (
                  <p className="description">{post.frontmatter.description}</p>
                )}
              </div>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div id="comments">
              <h2>Comments</h2>
              <Disqus postNode={post} />
            </div>
          </article>
          <Sidebar post={post} {...props} />
        </section>
        <Suggested previous={previous} next={next} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        banner
      }
    }
  }
`
