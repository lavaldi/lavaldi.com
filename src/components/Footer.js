import React, { Component } from "react";
import { Link } from "gatsby";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <a
          href="https://twitter.com/lavaldi_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://github.com/lavaldi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://lavaldi.com/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </footer>
    );
  }
}
