
import React from 'react'

import withPosts, { inCategory, sortByDate } from 'nextein/posts'


import MainHead from '../components/main-head'
import PostListEntry from '../components/post-list-entry'
import Navigation from '../components/navigation'
import withAnalytics from '../components/analytics'

const Writings = (props) => {
  const { posts, url } = props;

  const data = {
    url: url.pathname,
    title: "Writings",
    description: "Entradas en La Valdi"
  };

  posts.sort(sortByDate)

  return (
    <main>
      <MainHead data={data} />
      <section className="hero">
        <Navigation />
      </section>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Writings
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content-wrap">
            {
              posts
                .map((post, idx) => <PostListEntry key={`post-${idx}`} {...post} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default withAnalytics(withPosts(Writings))
