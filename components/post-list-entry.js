
import React from 'react'
import Moment from 'react-moment'
import Link from 'nextein/link'

export default ({ data, content }) => {
  const { title, date = 'post' } = data

  return (
    <article style={styles.article}>
      <Moment locale="es" format="LL" add={{ hours: 5 }} style={styles.moment}>{date}</Moment>
      <Link data={data} content={content}><a>{title}</a></Link>
    </article>
  )
}

const styles = {
  moment: {
    color: '#4a4a4a',
    display: 'inline-block',
    fontSize: '1rem',
    fontStyle: "italic",
    marginRight: '1rem',
    textAlign: 'right',
    width: '195px',
  },
  article: {
    borderBottom: '1px solid #f2f2f2',
    fontStyle: '1.25rem',
    padding: '1em',
  }
};
