import React from 'react'
import Button from '../button/Button'
import { s } from 'framer-motion/client'

export default function TeamCard({ image, title ,  slug}) {
  return (
    <div className="project-card project-item">
    <img src={image} alt={title} />
    <div className="project_detail">
      < div className="project_btn_valign">
        <Button text={"READ MORE"} slug={slug}/>
        <h4 >{title}</h4>
      </div>
    </div>
  </div>
  )
}
