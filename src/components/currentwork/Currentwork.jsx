import React from 'react'
import './currentwork.css'
import { BiCheck } from 'react-icons/bi'

const Currentwork = () => {
  return (
<section id='currentwork'> 
    <h5>Current Reads</h5>
    <h2>What I'm Working On</h2>

    <div className='container currentwork__container'>
        <article className='currentwork'>
            <div className='currentwork__head'>
                <h3>Books</h3>
                </div>

                <ul className='currentwork__list'>
                    <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Road To React. Robin Weiruch</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Full Stack Development with GraphQL and React. Sebastian Grebe</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Road To React. Robin Weiruch</p>
                        </li>
                </ul>
        </article>
        <article className='currentwork'>
            <div className='currentwork__head'>
                <h3>Web Development</h3>
                </div>

                <ul className='currentwork__list'>
                    <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Personal Website</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>GraphBook. Building a Facebook like app with GraphQL and React.</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Road To React. Robin Weiruch</p>
                        </li>
                </ul>
        </article>
        </div>
</section>
 )
}

export default Currentwork