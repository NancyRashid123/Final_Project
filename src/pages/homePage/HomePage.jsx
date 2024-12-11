import React from "react";
import Banner from "../../component/banner/Banner";
import History from "../../component/history/History";
import ContactForm from "../../component/contactForm/ContactForm";
import WhyChooseUs from "../../component/whyChooseUS/WhyChooseUs";
import TeamSection from "../../component/teamSection/TeamSection";



export default function HomePage() {
  return (
    <main className="home-page">
      <div><Banner /></div>
      <div><History /></div>
      <div className="slogan px py">45 years of experience in growing Harvest</div>
      <div><ContactForm /></div>
      <div><WhyChooseUs /></div>
      <div><TeamSection/></div>
    </main>
  );
}



