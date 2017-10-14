import React from 'react'

export default ({ tags }) => {
  return (
    !!tags.length &&
    <span>
      {
        tags.map(tag => <span className="tag" key={`tag-${tag}`}> {tag}</span>)
      }
    </span>
  )
}