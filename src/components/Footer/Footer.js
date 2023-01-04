import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="all-link-container">
        <div className="repo-link-container">
          <a href="https://github.com/Mrcolin99/stretch-dogs">App Repo</a>
        </div>
        <div className="team-link-container">
          <a href="https://github.com/justenanderson-commits">Justen Anderson</a>
          <a href="https://github.com/tricia-holmes/">Tricia Holmes</a>
          <a href="https://github.com/Mrcolin99">Colin Ciervo</a>
          <a href="https://github.com/tramtram1130">Dana Truong</a>
        </div>
      </nav>
    </div>
  )
}

export default Footer