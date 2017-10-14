
import React from 'react'
import Moment from 'react-moment'
import Link from 'nextein/link'
import { Content } from 'nextein/post'

import Tags from './tags'

export default ({ data, content, excerpt=true }) => {
  const { url, tag, title, date, _entry, page = 'post' } = data

  return (
    <article className="content is-medium" style={styles.article}>
      <div className="content-header">
        <h1 className="title">
          <Link data={data} content={content}><a>{title}</a></Link>
        </h1>
        <span className="tags">
          <Moment locale="es" format="LL" style={styles.moment}>{date}</Moment>
          <Tags tags={tag} />
        </span>
      </div>
      <div className="content-body">
        <Content data={data} content={content} excerpt={excerpt} />
      </div>
    </article>
  )
}

const styles = {
  moment: {
    alignItems: 'center',
    borderRadius: '3px',
    color: '#4a4a4a',
    display: 'inline-flex',
    fontSize: '.75rem',
    fontStyle: "italic",
    height: '2em',
    justifyContent: 'center',
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    marginRight: '0.5rem'
  },
  article: {
    padding: '1em 1em 3em',
    borderBottom: '1px solid #f2f2f2'
  }
};
