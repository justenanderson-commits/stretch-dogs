import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../utilis/constants'
import paw from '../../assets/images/paw-print-heart.gif'

const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/' className='header__link'>
        <img
          src={ paw }
          alt='Lisa Frank dog tracks'
        />
      </Link>
      <nav className='link-container'>
        <Link to={APP_ROUTES.ABOUT}>About</Link>
        <Link to='/'>Breeds</Link>
        <Link to={APP_ROUTES.RESOURCES}>Resources</Link>
      </nav>
    </div>
  )
}

export default Header
