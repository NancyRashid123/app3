import React from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Login from '../login/Login'

export default function Navbar() {
  return (
    <div className='navbar-section'>
        <Logo/>
        <Menu/>
        <Login/>
    </div>
  )
}
