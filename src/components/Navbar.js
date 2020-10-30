import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <nav className="level">
    {/* <div className="navbar-menu is-active"> */}

    <Link to="/" className="level-item has-text-centered		">
      {/* <div className="level-item has-text-centered		"> */}
      <figure className="image is-128x128 heroGif level-item has-text-centered imageNavbar">
        <img src="/images/hero-gif.gif" />
      </figure>
      {/* </div> */}
    </Link>

    <Link to="/" className="level-item has-text-centered		">
      <figure className="imageHero level-item has-text-centered imageNavbar">
        <img src="/images/logo100.png" />
      </figure>
    </Link>



    <div className="level-item has-text-centered">

      <div className="level-item has-text-centered">

        <div className="buttons ">
          <Link className="button is-light" to="/">Home</Link>
          <Link className="button is-success" to="/heroes">Search All Heroes</Link>
        </div>
      </div>
    </div>
    {/* </div> */}
  </nav>
}

export default Navbar