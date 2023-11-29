import React from 'react'
import { FaAward } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <FaAward className='about__icon' />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 months</span>
        </div>

        <div className="about__box">
            <IoBriefcaseOutline className='about__icon' />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>

        <div className="about__box">
            <BiSupport className='about__icon'/>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
