import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/crypto-tracker.png'
import IMG2 from '../../assets/cred.png'
import IMG3 from '../../assets/s.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Responsive Crypto Tracker website in React js',
    github:'https://github.com/Nitish21073/crypto-tracker',
    demo:'https://crypto-tracker-72gw.onrender.com/'

},
  {
    id:2,
    image:IMG2,
    title:'Responsive Cred clone Website in React js',
    github:'https://github.com/Nitish21073/cred-clone',
    demo:'https://cred-clone-4z3f.onrender.com/'

},
  {
    id:3,
    image:IMG3,
    title:'Ecomm Website in ReactJs',
    github:'https://github.com/Nitish21073/Ecomm-Website',
    demo:'https://shopsy-aj7b.onrender.com/'

},
 
]

const Portfolio = () => {
  return (
  <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    {
      data.map(({id,image,title,github,demo})=>{
        return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
           <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn' target='_blank'>Github</a>
           <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
