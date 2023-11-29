import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMessage, AiOutlineAppstore } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { RiFileShieldLine } from "react-icons/ri";
import { BiAperture } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './header.css'

const Header = () => {
    window.addEventListener("scroll",function () {
        const headerElement = this.document.querySelector(".header");
        if(this.scrollY >= 80) headerElement.classList.add('show-header')
        else headerElement.classList.remove('show-header')
    })

    const [toggle,showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className={`header`}>
        <nav className='nav container'>
            <a href="/" className='nav__logo'>Rajan</a>
            <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
                <ul className="nav__list grid">
                    <li className="nav_item">
                        <a href="/" className={activeNav === "#home" ? "nav__link active-link" : "nav__link" } onClick={()=>setActiveNav("#home")}>
                        <AiOutlineHome className='nav__icon'  /> Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link" } onClick={()=>setActiveNav("#about")}>
                        <FaRegUser className='nav__icon' /> About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                        <RiFileShieldLine className='nav__icon'/> Skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link" }>
                        <BiAperture className='nav__icon'/>Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link" }>
                        <AiOutlineMessage className='nav__icon' /> Contact
                        </a>
                    </li>
                </ul>

                <IoIosCloseCircleOutline className='nav__close' onClick={()=>showMenu(!toggle)} />
            </div>

            <div className="nav__toggle" onClick={()=>showMenu(!toggle)}>
            <AiOutlineAppstore />
            </div>
        </nav>
    </header>
  )
}

export default Header
