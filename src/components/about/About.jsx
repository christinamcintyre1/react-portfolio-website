import React from 'react'
import './about.css'
import Christina from '../../assets/christina_deer.jpeg'

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

        {/* <div className="about_content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Fun Stuff</h5>
            </article>


          </div> */}
          <div className="about__content p">
          <p>I started working for Walgreens as a cashier and from there, I worked my way up to Store Manager. I enjoyed my time at Walgreens for 21+ years, meeting new people, working in teams, and solving problems; however, I desired a challenge that Walgreens was no longer providing me. That's when I started learning software development and haven't looked back! I began by earning certificates in HTML and CSS. Most recently earned the Professional Certificate in Coding with MERN from MIT in April 2022. When I am not coding you can find me hiking with my boyfriend, playing with my cat and dog, or gardening. </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      
    </section>
  )
}

export default About