import React from 'react'
import TeamCard from '../teamCard/TeamCard';
import { getDataTeam } from '../../api/FetchApi';



export default function TeamSection() {
   const {data} = getDataTeam();
  return (
   

    <section className="projects-section px py">
    <div className="projects-content">
      <p className="projects-description">
      <span>OUR TEAM</span> <br />
    Our team of agricultural experts and partner companies specializes in soil analysis, crop recommendations
</p>

 

    </div>
    <div className="projects-gallery">
      {data?.data?.map((team, index) => (
        <TeamCard 
          key={index}
          image={team.image}
          title={team.title}
          name={team.name}
          slug={team.slug}
          id={team.id}
        />
      ))}
    </div>
  </section>


  )
}
