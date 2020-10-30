import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo100.png'
import gif from '../images/hero-gif.gif'

const Navbar = () => {
  return <nav className="level">
    {/* <div className="navbar-menu is-active"> */}

    <Link to="/project-2/" className="level-item has-text-centered		">
      {/* <div className="level-item has-text-centered		"> */}
      <figure className="image is-128x128 heroGif level-item has-text-centered imageNavbar">
        <img src={gif} />
      </figure>
      {/* </div> */}
    </Link>

    <Link to="/project-2/" className="level-item has-text-centered		">
      <figure className="imageHero level-item has-text-centered imageNavbar">
        <img src={logo} />
      </figure>
    </Link>



    <div className="level-item has-text-centered">

      <div className="level-item has-text-centered">

        <div className="buttons ">
          <Link className="button is-light" to="/project-2/">Home</Link>
          <Link className="button is-success" to="/project-2/heroes/">Search All Heroes</Link>
        </div>
      </div>
    </div>
    {/* </div> */}
  </nav>
}

export default Navbar