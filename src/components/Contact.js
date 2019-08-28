import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>You can also find me around the web.</p>
        <ul>
          <li>
            <strong>GitHub</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/lavaldi"
            >
              lavaldi
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/lavaldi_"
            >
              lavaldi_
            </a>
          </li>
          <li>
            <strong>Feed</strong>: <a href="https://lavaldi.com/rss.xml">RSS</a>
          </li>
        </ul>
      </>
    );
  }
}
