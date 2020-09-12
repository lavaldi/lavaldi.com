import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function PostsWithImage({ data }) {
  const LinkType = ({ post, children }) =>
    post.slug ? (
      <Link key={post.id} to={post.slug}>
        {children}
      </Link>
    ) : (
      <a key={post.id} href={post.path}>
        {children}
      </a>
    )

  return (
    <div className="grid guide">
      {data.map((post) => {
        return (
          <LinkType key={post.id} post={post}>
            {post.staticThumbnail ? (
              <img
                src={post.staticThumbnail}
                alt={post.id}
                height="50"
                width="50"
              />
            ) :  post.banner ? (
              <img
                src={post.banner}
                alt={post.id}
              />
            ) : (
              <Img fixed={post.thumbnail} />
            )}
            <h2>{post.title}</h2>
            {post.description && <p className="description">{post.description}</p>}
          </LinkType>
        )
      })}
    </div>
  )
}
