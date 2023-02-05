import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'am</h5>
      <h1>Nitish Kumar</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA/>
      <HeaderSocials/>
      {/* <div className="me">
        <img src={ME} alt="me" />
      </div> */}
     
    </div>
   </header>
  )
}

export default Header
