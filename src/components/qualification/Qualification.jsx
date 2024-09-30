import React, { useState } from 'react'
import './qualification.css'
import { FaUserGraduate } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
const Qualification = () => {

  const [toggleSatae, setToggleState] = useState(1);

  const toggleTab = (index)=>{
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleSatae === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={()=>toggleTab(1)}>
            <FaUserGraduate className='qualification__icon' /> Education
          </div>

          <div className={toggleSatae === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={()=>toggleTab(2)}>
            <IoBriefcaseOutline className='qualification__icon' /> Experience
          </div>
        </div>

      <div className="qualification__sections">
        <div className={toggleSatae === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">B.E Computer Science & Engineering</h3>
              <span className="qualification__subtitle">Anna University</span>
              <div className="qualification__calender">
                <SlCalender /> 2021 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Web Designer</h3>
              <span className="qualification__subtitle">freecodecamp</span>
              <div className="qualification__calender">
                <SlCalender /> 2023-Apr - 2023-May
              </div>
            </div>
            <div>
          </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Java Developer</h3>
              <span className="qualification__subtitle">Coding Ninjas & HackerRank</span>
              <div className="qualification__calender">
                <SlCalender /> 2023-May - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
          </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">React & Redux</h3>
              <span className="qualification__subtitle">KG Coding</span>
              <div className="qualification__calender">
                <SlCalender /> 2023-Nov - 2024-Jan
              </div>
            </div>
            <div>
          </div>
          </div>

        </div>

        <div className={toggleSatae === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Web Developer</h3>
              <span className="qualification__subtitle"></span>
              <div className="qualification__calender">
                <SlCalender /> 2023-Sep - 2023-Sep
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
          </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Full Stack Java Developer</h3>
              <span className="qualification__subtitle">CodSoft</span>
              <div className="qualification__calender">
                <SlCalender /> 2023-Oct - 2023-Oct
              </div>
            </div>
            <div>
          </div>
          </div>

        </div>
      </div>

      </div>

    </section>
  )
}

export default Qualification
