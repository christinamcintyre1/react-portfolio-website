import React from 'react'
import './currentwork.css'
import { BiCheck } from 'react-icons/bi'

const Currentwork = () => {
  return (
<section id='currentwork'> 
    
    <h2>What I'm Working On</h2>

    <div className='container currentwork__container'>
        <article className='currentwork'>
            <div className='currentwork__head'>
                <h3>Books</h3>
                </div>

                <ul className='currentwork__list'>
                <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Clean Code. Robert C. Martin</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>Grokking Algorithms. An Illustrated Guide. Aditya Bhargava</p>
                        </li>
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
                        <p>The DevOps Handbook. Gene Kim </p>
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
                        <p>Personal Website christinamcintyre.com</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>GraphBook. Building a Facebook like app with GraphQL and React.</p>
                        </li>
                        <li>
                        <BiCheck className='current__list-icon'/>
                        <p>MERN Stack application to keep track of the positions and roles I have applied for. </p>
                        </li>
                      
                </ul>
        </article>
        </div>
</section>
 )
}

export default Currentwork