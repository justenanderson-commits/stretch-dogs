import React from 'react'
import { GITHUB_ROUTES } from '../../utilis/constants'
import './Footer.css'
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer-container'>
      <nav className='all-link-container'>
        <div className='repo-link-container'>
          <a href={GITHUB_ROUTES.REPO}><BsGithub /> Repo</a>
        </div>
        <div className='team-link-container'>
          <a href={GITHUB_ROUTES.JUSTEN}>Justen Anderson</a>
          <a href={GITHUB_ROUTES.TRICIA}>Tricia Holmes</a>
          <a href={GITHUB_ROUTES.COLIN}>Colin Ciervo</a>
          <a href={GITHUB_ROUTES.DANA}>Dana Truong</a>
        </div>
      </nav>
    </div>
  )
}

export default Footer
