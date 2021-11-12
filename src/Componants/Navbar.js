import React from "react";
import Image from '../IMAGES/IMAGE.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    return <nav className='navbar'>
       
    <div className="nav-center">
      <Link to='/'>
        <img src={Image} alt='' className="logo"/></Link>
    </div>
    <ul className='nav-links'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/About'>About</Link></li>
    </ul> 
  </nav>
}

export default Navbar