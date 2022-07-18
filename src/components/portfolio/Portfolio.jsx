import React from 'react'
import './portfolio.css'
import website from '../../assets/website.jpeg'
import hackerstories from '../../assets/hackerstories.jpg'
import bustrackerfile from '../../assets/bustrackerfile.jpeg'
import exchangerates from '../../assets/exchangerates.jpg'
import tasktracker from '../../assets/tasktracker.jpg'
import runningtracker from '../../assets/runningtracker.jpg'
import { FaGithub } from 'react-icons/fa'


const data = [
  {
    id: 1,
    image: website,
    title: 'I used React Icons library and EmailJS. I made reusable variables in the CSS file to make the colors on the site more uniform. React useState and useRef are used for state management on the NavBar and the contact form. ',
    github: 'https://github.com/christinamcintyre1/react-portfolio-website',
  },
  {
    id: 2,
    image: hackerstories,
    title: 'SPA built using Create-React-App. I created a search bar that return reults from a third-party API, Hacker News. The search bar will start returning results after the first 3 letters are entered into the search bar. It also return the number of comments associated with each article as well as the ability to delete articles from returned results.',
    github: "https://github.com/christinamcintyre1/hacker-stories",
  },
  {
    id: 3,
    title: 'Currency Rate Calculator. App I built using React JS, CSS, and HTML. You can convert currencies from one currency to another. I used React, Redux, and the Currency Exchange API.',
    image: exchangerates,
    github: "https://github.com/christinamcintyre1/exchange-rate-main",
  },
  {
    id: 4,
    title: 'Running Tracker. App I built using Javascript, CSS, and HTML. This app allows you to track your running progress. You can add a new run, view your weekly total for the last 7 days, and it has a progress circle at the bottom that automatically fills up as you move towards your weekly goal.',
    image: runningtracker,
    github: "https://github.com/christinamcintyre1/runningtracker",
  },
  {
    id: 3,
    image: tasktracker,
    title: 'Task Trasker App. App I built using JavaScript, CSS, HTML, and React.js. You can add and delete tasks, and mark them as complete. I deployed the app to Heroku. The url is to-do-testing.herokuapp.com.',
    github: "https://github.com/christinamcintyre1/react-todo",
  },
  {
    id: 6,
    title: 'BusTracker App. This is one of my first projects at MIT. We were tasked with creating a web application that would allow users to track their bus routes and times. We hit the mapbox.com API to get the map image as well as the latitude/longitude coordinates of the bus stops.',
    image: bustrackerfile,
    github: "https://github.com/christinamcintyre1/bustrackermap"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
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
                  <a href={github} className='portfolio__item-btn' target='_blank' rel="noopener noreferrer"><FaGithub className='portfolio__item-icon' /></a>
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