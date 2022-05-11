import React from 'react'
import './portfolio.css'
import hackerstories from '../../assets/hackerstories.jpg'
import bustrackerfile from '../../assets/bustrackerfile.jpeg'
import tasktracker from '../../assets/tasktracker.jpg'
import { FaGithub } from 'react-icons/fa'


const data = [
  {
    id: 1,
    image: hackerstories,
    title: 'SPA built using Create-React-App. I created a search bar that return reults from a third-party API, Hacker News. The search bar will start returning results after the first 3 letters are entered into the search bar. It also return the number of comments associated with each article as well as the ability to delete articles from returned results.',
    github: "https://github.com/christinamcintyre1/hacker-stories",
  },
  {
    id: 2,
    image: tasktracker,
    title: 'Task Trasker App. App I built using JavaScript, CSS, HTML, and React.js. You can add and delete tasks, and mark them as complete. I deployed the app to Heroku. The url is to-do-testing.herokuapp.com.',
    github: "https://github.com/christinamcintyre1/react-todo"
  },
  {
    id: 3, 
    title: 'BusTracker App. This is one of my first projects at MIT. We were tasked with creating a web application that would allow users to track their bus routes and times. We hit the mapbox.com API to get the map image as well as the latitude/longitude coordinates of the bus stops.' ,
    image: bustrackerfile ,
    github: "https://github.com/christinamcintyre1/bustrackermap"
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
                  <a href={github} className='btn btn-primary' target='_blank'><FaGithub className='portfolio__item-icon' /></a>
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