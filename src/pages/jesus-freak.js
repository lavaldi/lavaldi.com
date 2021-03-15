import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

  return (
    <Layout>
      <Helmet title={`Jesus Freak | ${config.siteTitle}`} />
      <SEO customDescription="About Jesus" />
      <header>
        <div className="container text-center">
          <h1>Jesus Freak</h1>
          <p className="subtitle">About Jesus</p>
        </div>
      </header>
      <section>
        <div className="guides-section">
          <div className="container">
            <Posts data={simplifiedPosts} showYears withDate narrow />
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
          }
        }
      }
    }
  }
`
