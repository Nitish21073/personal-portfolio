import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience_frontend">
       <h3>Frontend Development</h3>
       <div className="experience__content">
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>HTML</h4>
         <small className='text-light'>Experienced</small>
       </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>CSS</h4>
         <small className='text-light'>Intermediate</small>
       </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>JavaScript</h4>
         <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>React</h4>
         <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>BootStrap</h4>
         <small className='text-light'>Intermediate</small>
        </div>
        </article>
       </div>
      </div>
      <div className="experience_other">
      <h3>Other Skills</h3>
       <div className="experience__content">
        {/* <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
       <div>
       <h4>DBMS</h4>
         <small className='text-light'>Intermediate</small>
       </div>
        </article> */}
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Computer Networking</h4>
         <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Redux</h4>
         <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Frontend System Design</h4>
         <small className='text-light'>Low Level Design</small>
        </div>
        </article>
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Core java</h4>
         <small className='text-light'>Intermediate</small>
        </div>
        </article>
       </div>
      </div>
    </div>
   </section>
  )
}

export default Experience
