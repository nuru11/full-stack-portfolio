import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/resturant-img.jpg"
import IMG2 from "../../assets/e-commerce.jpg"
import IMG3 from "../../assets/memoryGame.jpg"
import IMG4 from "../../assets/calculator.png"
import IMG5 from "../../assets/background-img.webp"
import IMG6 from "../../assets/noteTaker.jpg"

import IMG7 from "../../assets/chat-app.png"
import IMG8 from "../../assets/todo-list.png"

const frontendData = [
  {
    id:1,
    image:IMG1,
    github: "https://github.com/nuru11/lastRestu.git",
    goLive: "http://nuru11.github.io/lastRestu",
    name: 'restaurant',
    tools: "React js"

  },

  {
    id:2,
    image:IMG2,
    github: "https://github.com/nuru11/testEcom.git",
    goLive: "https://nuru11.github.io/testEcom",
    name: "E-commerce",
    tools: "React js"
  }, 

  {
    id:3,
    image:IMG3,
    github: "https://github.com/nuru11/memoryGame.git",
    goLive: "https://nuru11.github.io/memoryGame/",
    name: "memory Game",
    tools: "Html Css Javascript"
  },

  {
    id:4,
    image:IMG4,
    github: "https://github.com/nuru11/calculator.git",
    goLive: "https://nuru11.github.io/calculator/",
    name: "calculator",
    tools: "Html Css Javascript"
  },
  {
    id:5,
    image:IMG5,
    github: "https://github.com/nuru11/background-color.git",
    goLive: "https://nuru11.github.io/background-color/",
    name: "background-color generation",
    tools: "Html Css Javascript"
  },

  {
    id:6,
    image:IMG6,
    github: "https://github.com/nuru11/noteTaker.git",
    goLive: "https://nuru11.github.io/noteTaker/",
    name: "note taker",
    tools: "Html Css Javascript"
  }
]

const backendData = [
  {
    id:1,
    image:IMG7,
    github: "https://github.com/nuru11/noteTaker.git",
    name: "todo list",
    tools: "node js express"
  },
  {
    id:2,
    image:IMG8,
    github: "https://github.com/nuru11/noteTaker.git",
    name: "chat app",
    tools: "node js express"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>portfolio</h2>

       <h className="frontend-project-title">frontend projects</h>
      <div className='container portfolio__container'>
     {frontendData.map(({id, image, github, goLive, name, tools}) => {
      return(
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img className="portfolio-img" src={image} alt="" />
        </div>
       <ul className='portfolio-ul'>
        <li className="portfolio-li-name">{name}</li>
        <li className='portfolio-li-tools'>{tools}</li>
       </ul>
        <div className="portfolio__item-cta">
        <a href={github} target="_blank" className='btn'>Gthub</a>
        <a href={goLive} className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
      </article>
      )
     })
    }
      

     
    </div>
       
    <h className="frontend-project-title">backend projects</h>
    <div className='container portfolio__container'>
     {backendData.map(({id, image, github, name, tools})=>{
      return(
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img className="portfolio-img" src={image} alt="" />
        </div>
       <ul className='portfolio-ul'>
        <li className="portfolio-li-name">{name}</li>
        <li className='portfolio-li-tools'>{tools}</li>
       </ul>
        <div className="portfolio__item-cta">
        <a href={github} target="_blank" className='btn'>Gthub</a>
        </div>
      </article>
      )
    }
    )}   
    </div>

    </section>
  )
}

export default Portfolio

