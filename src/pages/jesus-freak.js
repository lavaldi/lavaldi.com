import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import PostsWithImage from '../components/PostsWithImage'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(
    () => getSimplifiedPosts(posts, { thumbnails: true }),
    [posts]
  )

  return (
    <Layout>
      <Helmet title={`Jesus Freak | ${config.siteTitle}`} />
      <SEO />
      <header>
        <div className="container text-center">
          <h1>Jesus Freak</h1>
          <p className="subtitle">
            Acerca de Jesús
          </p>
        </div>
      </header>
      <section>
        <div className="guides-section">
          <div className="container">
            <PostsWithImage data={simplifiedPosts} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query JesusFreakQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: "JesusFreak" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner
            thumbnail {
              childImageSharp {
                fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
