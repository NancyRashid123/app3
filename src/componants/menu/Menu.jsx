import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
         <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
        <NavLink to={'/posts'}>Posts</NavLink>
        </li>
      </ul>
    </div>
  )
}
