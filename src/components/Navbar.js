import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <nav className="navbar">
    <div className="navbar-menu is-active">

      <Link to="/">
        <div className="navbar-brand">
          <figure className="image is-128x128">
            <img src="/images/hero-gif.gif" />
          </figure>
        </div>
      </Link>

      <Link to="/">
        <figure className="image">
          <img src="/images/logo100.png" />
        </figure>
      </Link>


      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-light" to="/">Home</Link>
            <Link className="button is-success" to="/heroes">Search All Heroes</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar