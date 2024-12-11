
import React from "react";
import OurTeamImage from "../../component/ourTeamImage/OurTeamImage";
import OurTeamContent from "../../component/ourTeamContent/OurTeamContent";
import { useParams } from "react-router-dom";
import { getSingleCompany } from "../../api/FetchApi";

export default function TeamDetails() {
  const {slug } = useParams();
  const { data } = getSingleCompany(slug);
  console.log(data?.data)
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
      <div className="ourteam-container">
        <OurTeamImage image={data?.data?.image} />
        <OurTeamContent title={data?.data?.title} about={data?.data?.about} website={data?.data?.website} services={data?.data?.services}/>
        </div>
      </section>
    </>
  );
}

