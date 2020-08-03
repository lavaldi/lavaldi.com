import React, { Component } from 'react'
import lavaldi from '../../content/images/lavaldi.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={lavaldi} alt="Claudia Valdivieso" />
            </div>
            <div>
              <p>
                {`I'm Software Engineer at Able. I'm christian, wife, and mother, and sometimes I write about
                christian life and programming.`}
              </p>
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/lavaldi_"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @lavaldi_
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
