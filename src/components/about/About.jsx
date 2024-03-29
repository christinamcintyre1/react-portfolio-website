import React from 'react'
import './about.css'
import Christina from '../../assets/christina_deer.jpeg'

const About = () => {
  return (
    <section id="about">

      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={Christina} alt='Christina' />
          </div>
        </div>

        <div className="about__content p">
          <p>My passion for software development can be traced back to before I even knew what a curly brace was. As a child, I was always taking things apart to see how they worked. As an adult, I am still curious about how things work, but now I have books to read. During my 22 years at Walgreens, I constantly solved problems as a cashier, and then as a Store Manager, I was tasked with more complex issues. The key to effective problem solving is to make the solution simple without adding complexity.
<br/>
            Outside of learning software development, I spend my free time hiking with my dog and boyfriend and  also gardening. My favorite celebrity is Jennifer Garner. She is from my home state of West Virginia and  appears to be the most down to earth famous person! I hope to meet her one day. </p>
        </div>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>

    </section>
  )
}

export default About