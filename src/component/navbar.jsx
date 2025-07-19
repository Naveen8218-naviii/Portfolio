import React from 'react'
import { MdMessage } from "react-icons/md";
import './navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="" srcset="" className='logo'/>

        <div className="menu">
<Link className='menulist'> Home</Link>
<Link className='menulist'>About</Link>
<Link className='menulist'>Portfolio</Link>
<Link className='menulist'>Clints</Link>
        </div>  

        <button className='menubtn'>
<MdMessage className='btn-img' /> Contact me
        </button>
    </nav>
  )
}

export default Navbar