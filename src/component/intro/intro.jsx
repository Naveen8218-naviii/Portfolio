import React from 'react'
import { Link } from 'react-scroll';
import Dp from '../../assets/pic1.png'
import './intro.css'
import { HiRefresh } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="intro">

      <div className="left-intro">
<span className="hello">Hello ,</span> <br />
<span className="introtext">I am <span className="name">Naveen</span> <br /> Web Devloper</span>
<p className="intropera">I am a fresher web devloper with creating visuals appeling and user friendly website.</p> <br />
<Link><botton className="btn"><HiRefresh />Hire me</botton></Link>
      </div>

      <img src={Dp} alt="" srcset="" className='bg' />
    </section>
  )
}

export default Intro