import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({title , desc ,id}) {
  return (
    <Link to={`${id}`} className='posts-card'>
      <h4>{title}</h4>
      <p>{desc}</p>
    </Link>
  )
}
