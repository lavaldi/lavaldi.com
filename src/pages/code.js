import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function BlogIndex({ data, ...props }) {
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

  return (
    <Layout>
      <Helmet title={`Code | ${config.siteTitle}`} />
      <SEO customDescription="Articles, tutorials and more" />
      <header>
        <div className="container text-center">
          <h1>Code</h1>
          <p className="subtitle">Articles, tutorials and more</p>
        </div>
      </header>
      <section>
        <div className="container">
          <Posts data={simplifiedPosts} showYears withDate narrow />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CodeQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: "Code" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
