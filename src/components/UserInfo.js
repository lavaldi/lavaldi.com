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
                {`I'm software engineer at Able. I'm christian and wife, and sometimes I write about
                christian life and programming.`}
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
