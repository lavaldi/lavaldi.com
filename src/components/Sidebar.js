import React from 'react'
import { Link } from 'gatsby'

import lavaldi from '../../content/images/lavaldi.jpg'

import { slugify } from '../utils/helpers'

export default function Sidebar({ post, ...props }) {
  const { tags } = post.frontmatter

  return (
    <aside>
      <div className="aside-content">
        <section>
          <img src={lavaldi} alt="Claudia Valdivieso" className="avatar" />
          <p>
            I'm Claudia, christian, wife, mother and a software engineer,
            and sometimes I write about christianity and programming.
          </p>
        </section>
        <section>
          <h3>Tags</h3>
          <div className="cell tags">
            {tags &&
              tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/tags/${slugify(tag)}`}
                  className={`tag-${tag}`}
                >
                  {tag}
                </Link>
              ))}
          </div>
        </section>
        <section>
          <h3>Published</h3>
          <time>{post.frontmatter.date}</time>
        </section>
        <section>
          <h3>Stay in touch</h3>
          <nav>
            <a
              href="https://twitter.com/lavaldi_"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="emoji">🐦</span> Twitter: @lavaldi_
            </a>
            <a
              href="https://github.com/lavaldi"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="emoji">🐙</span> GitHub: @lavaldi
            </a>
            <Link
              to="/rss.xml"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="emoji">☢️</span> RSS feed
            </Link>
          </nav>
        </section>
      </div>
    </aside>
  )
}
