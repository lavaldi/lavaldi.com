import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import useClipboard from 'react-use-clipboard'

import Layout from '../components/Layout'
import Suggested from '../components/Suggested'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
import Tags from '../components/Tags'

import config from '../utils/config'

export default function PostTemplate({ data, pageContext, ...props }) {
  const post = data.markdownRemark
  const { previous, next, coverPicture } = pageContext
  const { slug, tags } = post.frontmatter
  const url = urljoin('https://lavaldi.com', slug)
  const discussUrl = `https://twitter.com/search?q=${encodeURIComponent(url)}`
  const [isCopiedToClipboard, setCopiedToClipboard] = useClipboard(url, {
    successDuration: 1000,
  })

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} coverPicture={coverPicture} postSEO />
      <div className="container medium">
        <article>
          <header className="article-header">
            <div className="container">
              <h1>{post.frontmatter.title}</h1>
              {post.frontmatter.description && (
                <p className="description">{post.frontmatter.description}</p>
              )}
              <time>{post.frontmatter.date}</time>
              {tags && <Tags tags={tags} />}
              <div className="flex controls">
                <button className="flex button" onClick={setCopiedToClipboard}>
                  <svg
                    className="mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                  {isCopiedToClipboard ? 'Copied!' : 'Copy link to clipboard'}
                </button>
                <Link
                  className="flex button"
                  to={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
                    post.frontmatter.title + ', post by @lavaldi'
                  )}&url=${url}`}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="-2 -4 24 24"
                  >
                    <g fill="currentColor">
                      <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03 4.02 4.02 0 0 0 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path>
                    </g>
                  </svg>
                  Tweet
                </Link>
              </div>
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <Suggested previous={previous} next={next} />
        <div id="comments">
          <h2>
            Comment or let's{' '}
            <a href={discussUrl} target="_blank" rel="noopener noreferrer">
              discuss on Twitter
            </a>
          </h2>
          <Disqus postNode={post} />
        </div>
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
        banner
        slug
      }
    }
  }
`
