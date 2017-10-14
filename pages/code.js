import React from 'react'

import withPosts, { inCategory, sortByDate } from 'nextein/posts'

import MainHead from '../components/main-head'
import PostListEntry from '../components/post-list-entry'
import Navigation from '../components/navigation'

const Index = ({ posts }) => {
  const data = {
    title: "Code",
    description: "Entradas en la categoría Code"
  };
  
  posts.sort(sortByDate)
  const subCategoryPosts =  posts
    .filter(inCategory('code', { includeSubCategories: true }))

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
              Front End
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content-wrap">
            {
              subCategoryPosts
              .map((post) => <PostListEntry key={post.data.url} {...post}/>)
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default withPosts(Index)
