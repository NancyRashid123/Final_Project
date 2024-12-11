import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <ul >
      <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
      </ul>
    </div>
  )
}
