import React from "react";
import Link from "nextein/link";

import withPosts from "nextein/posts";

import MainHead from "../components/main-head";
import Navigation from "../components/navigation";
import withAnalytics from "../components/analytics";

export default withAnalytics(
  withPosts(() => {
    const data = {
      title: "Claudia Valdivieso Castillo",
      description: "Jesusfreak and Front end"
    };

    return (
      <main>
        <MainHead data={data} />
        <section className="hero is-fullheight is-default">
          <Navigation />

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-centered has-nice-link">
                  <img
                    className="profile-pic"
                    src="/static/lavaldi.jpg"
                    width="140"
                    height="140"
                  />
                  <h1 className="title is-2">Claudia Valdivieso</h1>
                  <h2 className="subtitle is-4">Jesus Freak &amp; Front End</h2>
                  <p>
                    I'm front end developer at Orbis Ventures.
                    <br />I'm currently part of the{" "}
                    <a href="http://aptitus.com" target="_blank">
                      Aptitus.com
                    </a> team, which is a job search platform.
                    <br />And I also work in{" "}
                    <a href="http://maseducacion.com" target="_blank">
                      MásEducación.com
                    </a>, which is a platform
                    <br />to search for courses, undergraduate or postgraduate.
                  </p>
                  <br />
                  <p className="has-text-centered">
                    <Link href="/writings">
                      <a className="button is-large is-white">
                        <span className="icon">
                          <i className="icon-pencil" />
                        </span>
                        <span>Writings</span>
                      </a>
                    </Link>
                    <a
                      className="button is-large is-white"
                      target="_blank"
                      href="https://github.com/lavaldi"
                    >
                      <span className="icon">
                        <i className="icon-github" />
                      </span>
                      <span>GitHub</span>
                    </a>
                    <a
                      className="button is-large is-white"
                      target="_blank"
                      href="https://twitter.com/lavaldi_"
                    >
                      <span className="icon">
                        <i className="icon-twitter" />
                      </span>
                      <span>Tweets</span>
                    </a>
                    {/* <a
                      className="button is-large is-white"
                      target="_blank"
                      href="https://fb.me/lavaldiblog"
                    >
                      <span className="icon">
                        <i className="icon-facebook-official" />
                      </span>
                      <span>Facebook</span>
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  })
);
