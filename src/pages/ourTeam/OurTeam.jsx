import React from "react";
import { useSearchParams } from "react-router-dom";
import OurTeamImage from "../../component/ourTeamImage/OurTeamImage";
import OurTeamContent from "../../component/ourTeamContent/OurTeamContent";
import { getDataTeam } from "../../api/FetchApi";

export default function OurTeam() {
  const { data } = getDataTeam();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug"); 
  const filteredData = slug
    ? data?.data?.filter((team) => team.slug.toString() === slug)
    : data?.data;

  return (
    <>
      <header className="ourteam-header">
        <div className="ourteam-header-bg"> </div>
        <div className="ourteam-header-title px">
          <h1>Team</h1>
        </div>
        <div className="ourteam-header-overlay"></div>
      </header>
      <section className="ourteam-section px py">
        {filteredData?.map((ourTeam, index) => (
          <div className="ourteam-container" key={index}>
            <OurTeamImage image={ourTeam.image} />
            <OurTeamContent
              title={ourTeam.title}
              about={ourTeam.about}
              website={ourTeam.website}
              services={ourTeam.services}
            />
          </div>
        ))}
      </section>
    </>
  );
}

