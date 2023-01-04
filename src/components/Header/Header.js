import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import APP_ROUTES from '../../utilis/constants'

const Header = () => {
  return (
    <div className='header-container'>
      <img
        src='https://www.publicdomainpictures.net/pictures/440000/velka/pfoten-abdruck-clipart-hund.png'
        alt='Lisa Frank dog tracks'
      ></img>
      <nav className='link-container'>
        <Link to={APP_ROUTES.ABOUT}>About</Link>
        <Link to='/'>Breeds</Link>
        <Link to='/'>Resources</Link>
      </nav>
    </div>
  )
}

export default Header
