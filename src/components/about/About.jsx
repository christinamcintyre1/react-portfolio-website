import React from 'react'
import './about.css'
import Christina from '../../assets/christina_deer.jpeg'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={Christina} alt='Christina' />
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Fun Stuff</h5>
            </article>


          </div>
          <p>In this section is where I want to list things I do for fun and relaxation. Cats, dogs and walks! oh and gardening,guilty pleasure Real Housewives??, </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About