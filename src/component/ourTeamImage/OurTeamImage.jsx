import React from 'react'

export default function OurTeamImage({image,name}) {
  return (
    <div className='ourteam-image'> 
    {/* <img src={image} alt="Team" /> */}
        {image ? <img src={image} alt={name} /> : <p>No image available</p>}
    </div>
  )
}
