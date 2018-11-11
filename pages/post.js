import React, { Component } from "react";
import Moment from "react-moment";
import withPost, { Content } from "nextein/post";
import DisqusComments from "react-disqus-comments";

import MainHead from "../components/main-head";
import Navigation from "../components/navigation";
import Tags from "../components/tags";
import withAnalytics from "../components/analytics";
import Code from "../components/code";

class Post extends Component {
  render() {
    const { post } = this.props;
    const { data } = post;
    const date = data.date;
    const tags = data.tag ? [].concat(data.tag) : [];
    const dataHead = {
      url: data.url,
      title: data.title,
      description: data.excerpt || data.title,
      image: data.background
        ? data.background
        : data.category === "jesusfreak"
          ? "https://lavaldi.com/static/jesusfreak.jpg"
          : data.category === "code"
            ? "https://lavaldi.com/static/code.jpg"
            : null
    };
    const backgroundImg = data.background
      ? data.background
      : data.category === "jesusfreak"
        ? "https://i.imgur.com/6n69ME5.jpg"
        : data.category === "code"
          ? "https://i.imgur.com/7HUo6j1.jpg"
          : null;

    const background = backgroundImg
      ? ", 50% url(" + backgroundImg + ")"
      : "#fff";

    return (
      <main>
        <MainHead data={dataHead} />
        <section className="hero">
          <Navigation />
        </section>
        <section
          style={{
            background:
              "linear-gradient( rgba(0, 0, 0, .6), rgba(0, 0, 0, .5))" +
              background +
              "",
            backgroundSize: "cover",
            margin: "0",
            padding: "2em"
          }}
        >
          <div className="container">
            <div className="content-wrap">
              <h1 className="title is-1" style={styles.title}>
                {data.title}
              </h1>
              <span className="tags" style={styles.tags}>
                <Moment locale="es" format="LL" add={{ hours: 5 }} style={styles.moment}>
                  {date}
                </Moment>
                <Tags tags={tags} />
              </span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content-wrap">
              <article className="content content-body is-medium">
                <Content
                  {...post}
                  renderers={{
                    p: Paragraph,
                    code: Code
                  }}
                />
                <hr />
                <p>
                  <i>Gracias por leer. Déjame un mensaje por si las dudas</i> 😉
                </p>
              </article>
              <DisqusComments shortname="lavaldi" title={data.title} />
            </div>
          </div>
        </section>
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59ebd93dbcd8b2f5"
        />
      </main>
    );
  }
}

export default withAnalytics(withPost(Post));

// Renderers -----

const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

const styles = {
  moment: {
    alignItems: "center",
    borderRadius: "3px",
    color: "#fff",
    display: "inline-flex",
    fontStyle: "italic",
    height: "2em",
    justifyContent: "center",
    lineHeight: "1.5",
    whiteSpace: "nowrap",
    marginRight: "0.5rem",
    marginBottom: "0.5rem"
  },
  title: {
    color: "#fff",
    margin: "3em auto 0"
  },
  tags: {
    paddingTop: "2rem",
    margin: "0 auto 3em"
  }
};
