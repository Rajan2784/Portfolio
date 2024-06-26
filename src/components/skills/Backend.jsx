import React from 'react'

import { LuBadgeCheck } from "react-icons/lu"

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <LuBadgeCheck className='badge' />
                    <div>
                        <h3 className="skills__name">Spring Boot</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <LuBadgeCheck className='badge' />
                    <div>
                        <h3 className="skills__name">Node Js</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <LuBadgeCheck className='badge' />
                    <div>
                        <h3 className="skills__name">Express.js</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>

                
                
            </div>

            

            <div className="skills__group">

                <div className="skills__data">
                    <LuBadgeCheck className='badge' />
                    <div>
                        <h3 className="skills__name">Mongo DB</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <LuBadgeCheck className='badge' />
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <LuBadgeCheck className='badge' />
                    <div>
                        <h3 className="skills__name">My SQL</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Backend
