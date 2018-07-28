import React from 'react'

import withPosts, { inCategory, sortByDate } from 'nextein/posts'

import MainHead from '../components/main-head'
import PostListEntry from '../components/post-list-entry'
import Navigation from '../components/navigation'
import withAnalytics from '../components/analytics'

const Index = (props) => {
  const { posts, url } = props;

  const data = {
    url: url.pathname,
    title: "Jesus Freak",
    description: "Entradas en la categoría Jesus Freak",
    image: "http://lavaldi.com/static/jesusfreak.jpg"
  };

  posts.sort(sortByDate)
  const subCategoryPosts = posts
    .filter(inCategory('jesusfreak', { includeSubCategories: true }))

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
              Jesus Freak
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content-wrap">
            {
              subCategoryPosts
                .map((post) => <PostListEntry key={post.data.url} {...post} />)
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default withAnalytics(withPosts(Index))
