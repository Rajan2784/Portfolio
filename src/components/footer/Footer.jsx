import React from 'react'
import './footer.css'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">
                Rajan
            </h1>

            <ul className="footer__list">
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#skills" className="footer__link">Skills</a></li>
                <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/rajput_rajan_620/" className="home__social-icon" target='_blank'>
                <AiOutlineInstagram className='footer__social-link' />
                </a>

                <a href="https://github.com/Rajan2784" className="home__social-icon" target='_blank'>
                <AiOutlineGithub className='footer__social-link' />

                </a>

                <a href="https://www.linkedin.com/in/rajan-kumar-singh-730769217/" className="home__social-icon" target='_blank'>
                <AiOutlineLinkedin className='footer__social-link'/>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Rajan. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
