import React from 'react'
import './header.css'
import CTA from './CTA'
import Christina from '../../assets/christinapurple.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container"> 
        <h2>Hello I'm</h2>
        <h1>Christina McIntyre</h1>
        <h2>Full Stack Developer</h2>
        <CTA className="cta-icon"/>
        <HeaderSocials />

        <div className='christina'>
          <img src={Christina} alt='Christina' />
        </div>

      </div>
    </header>
  )
}

export default Header