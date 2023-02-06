import React from 'react'
import {BsLinkedin,BsGithub,BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nitish-kumar-62a451245/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Nitish21073" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com/joinnitish" target='_blank'><BsTwitter/></a>
      
    </div>
  )
}

export default HeaderSocials
