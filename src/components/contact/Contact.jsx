import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4uxvf7c', 'template_xegw65r', form.current, 'k4H53e89GAECu4SRI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
     
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>christinamcintyre1@gmail.com</h5>
            <a href='mailto:christinamcintyre1@gmail.com' target="_blank">Send a Message</a>
            </article>
            </div>


            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email Address" required />
              <textarea name="message" rows="7" placeholder="Your Message" required />
              <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
            <a href='#header' className='top'>Top</a>
        </div>
      </section>
  )
}

export default Contact 