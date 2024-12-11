import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu'>
        
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/ourteam'}>Our team</NavLink>
        </li>
        <li>
          <NavLink to={'/products'}>Products</NavLink>
        </li>
        <li>
          <NavLink to={'/problems'}>Soil Analysis</NavLink>
        </li>
      </ul>
   
    </div>
  )
}
