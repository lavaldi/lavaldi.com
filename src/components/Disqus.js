import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import config from "../../data/SiteConfig";

class Disqus extends Component {
  state = {
    toasts: []
  };

  onSnackbarDismiss = () => {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment = () => {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }

  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(
      config.siteUrl,
      post.slug
    );

    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={post.id}
        title={post.title}
        url={url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

export default Disqus;