import React, { Component } from 'react'
import { Disqus as DisqusComments } from 'gatsby-plugin-disqus'
import urljoin from 'url-join'

class Disqus extends Component {
  state = {
    toasts: [],
  }

  onSnackbarDismiss = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment = () => {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!' })
    this.setState({ toasts })
  }

  render() {
    const { postNode } = this.props
    const post = postNode.frontmatter
    const url = urljoin('https://lavaldi.com', post.slug)
    const disqusConfig = {
      url,
      identifier: post.id,
      title: post.title,
    }

    return <DisqusComments config={disqusConfig} />
  }
}

export default Disqus
