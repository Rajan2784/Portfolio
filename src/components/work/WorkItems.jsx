import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const WorkItems = ({item}) => {
  const [project,setProject] = useState("");

  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} className='work__img' alt="" />
        <h3 className="work__title">{item.title}</h3>
        <a href={project} onClick={()=>setProject(item.link)} target='_blank' className="work__button">
            Take a look <FaArrowRight className='work__button-icon' />
        </a>
    </div>
  )
}

export default WorkItems
