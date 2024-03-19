import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'
function Header() {
  function removeauth(){
      localStorage.removeItem('userdata');
  }
  return (
    <div className='header'>
        <nav>
            <Link to='/explore'>Explore</Link>
            <Link to='/myproducts'>My products</Link>
            <Link to='/about'>About us</Link>
            <Link to='/login' onClick={removeauth}>Logout</Link>

        </nav>
    </div>
  )
}

export default Header
