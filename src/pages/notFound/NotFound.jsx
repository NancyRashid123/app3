import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='NotFound'>
        <h2>Sorry Page Not Found</h2>
        <Link>Back To Home</Link>
    </div>
  )
}
