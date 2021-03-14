import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/code">Code</Link>
          <Link to="/jesus-freak">Jesus Freak</Link>
          <a
            href="https://twitter.com/lavaldi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <Link to="/rss.xml">RSS</Link>
        </nav>
        <nav className="flex justify-center">
            With ❤️
        </nav>
      </section>
    </footer>
  )
}
