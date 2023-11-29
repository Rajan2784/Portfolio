import React from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Social = () => {
  return (
    <div className='home__social'>
      <a href="https://www.instagram.com/rajput_rajan_620/" className="home__social-icon" target='_blank'>
      <AiOutlineInstagram />
      </a>

      <a href="https://github.com/Rajan2784" className="home__social-icon" target='_blank'>
      <AiOutlineGithub />

      </a>

      <a href="https://www.linkedin.com/in/rajan-kumar-singh-730769217/" className="home__social-icon" target='_blank'>
      <AiOutlineLinkedin />
      </a>
    </div>
  )
}

export default Social
