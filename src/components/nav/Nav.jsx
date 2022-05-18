import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      
      <a href="#header" data-toggle="tooltip" title="Home" onClick={() => setActiveNav("#header")} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" data-toggle="tooltip" title="About Me" onClick={() => setActiveNav("#about")} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>

      <a href="#experience" data-toggle="tooltip" title="Experience" onClick={() => setActiveNav("#experience")} className={activeNav ==='#experience' ? 'active' : ''}><RiServiceLine/></a>

      <a href="#currentwork" data-toggle="tooltip" title="CurrentWork" onClick={() => setActiveNav("#currentwork")} className={activeNav ==='#currentwork' ? 'active' : ''} ><BiMessageSquareDetail />
      
      </a>

      <a href="#portfolio" data-toggle="tooltip" title="Portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav ==='#portfolio' ? 'active' : '' }><BiBook/></a>

      <a href="#contact" data-toggle="tooltip"  title="Contact" onClick={() => setActiveNav("#contact")} className={activeNav ==='#contact' ? 'active' : ''} ><BiMessageSquareDetail/></a>

   
</nav>
  )
}

export default Nav