import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

import projects from '../data/projects'

import lavaldi from '../../content/images/lavaldi.jpg'

export default function BlogIndex({ data }) {
  const latest = data.latest.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section className="lead">
        <div className="container">
          <div className="copy">
            <h1>
              Hey! I'm Claudia Valdivieso.
            </h1>
            <p>
              I'm christian, wife, mother and a software engineer, and sometimes
              I write about christianity and programming. You can read about{' '}
              <Link to="/code">code</Link>, and{' '}
              <Link to="/jesus-freak">christianity</Link>, or learn more{' '}
              <Link to="/me">about me</Link>.
            </p>
          </div>

          <div className="image">
            <img src={lavaldi} alt="Claudia Valdivieso" />
          </div>
        </div>
      </section>
      <div className="container index">
        <Section title="Latest Articles" button>
          <Posts data={simplifiedLatest} tags withDate />
        </Section>
        <Section title="Projects">
          <Projects data={projects} />
        </Section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
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
