import React from 'react'
import { Link } from 'gatsby'
import { slugify } from '../utils/helpers'

const colors = [
  '#37b24d',
  '#f03e3e',
  '#10a2f5',
  '#E8AC2A',
  '#fd7e14',
  '#1c7ed6',
  '#7950f2',
]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function Tags({ tags }) {
  return (
    <div className="cell tags">
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/tags/${slugify(tag)}`}
          style={{
            color: getRandomColor(),
          }}
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}
