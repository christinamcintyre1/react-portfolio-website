import React from 'react'
import './portfolio.css'
import prettybackground from '../../assets/prettybackground.jpg'

const data = [
  {
    id: 1,
    image: prettybackground,
    title: 'Portfolio Item 1',
    github: "https://github.com/christinamcintyre1/hacker-stories",
  },
  {
    id: 2,
    image: prettybackground,
    title: 'Portfolio Item 2',
    github: "https://github.com/christinamcintyre1/hacker-stories"
  },
  {
    id: 3,
    title: 'Portfolio Item 3',
    image: prettybackground,
    github: "https://github.com/christinamcintyre1/hacker-stories"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio