import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>HTML</h4>
            <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
            <h4>CSS</h4>
            <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>REACT</h4>
            <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'>Beginner</small>
             </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>STYLED COMPONENTS</h4>
            <small className='text-light'>Beginner</small>
             </div>
              </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className='experience__content'>
        <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>MONGODB</h4>
            <small className='text-light'>Beginner</small>
             </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>NODE JS</h4>
            <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>EXPRESS</h4>
            <small className='text-light'>Beginner</small>
             </div>
              </article>

              <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
            <h4>GRAPHQL</h4>
            <small className='text-light'>Beginner</small>
             </div>
              </article>

             </div>
          </div>

        </div>
      </section>
  )
}

export default Experience