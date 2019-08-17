import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { formatDate, editOnGithub } from "../utils/global";
import Disqus from "../components/Disqus";

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    let thumbnail;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed;
    }

    const date = formatDate(post.date);
    const githubLink = editOnGithub(post);
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
      post.title
    )}&url=${config.siteUrl}/${post.slug}/&via=lavaldi_`;

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header
            className={`single-header ${!thumbnail ? "no-thumbnail" : ""}`}
          >
            {thumbnail ? (
              <Img fixed={post.thumbnail.childImageSharp.fixed} />
            ) : null}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>/
                <a
                  className="twitter-link"
                  href={twitterShare}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share
                </a>
                /
                <span>
                  <a className="comment-link" href="#comments">
                    Comments
                  </a>
                  /
                </span>
                <a
                  className="github-link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit on Github ✏️
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>

          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
        </article>

        <UserInfo config={config} />

        <div className="container" id="comments">
          <Disqus postNode={postNode} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`;
