import React from "react";
import Button from "../button/Button";

export default function OurTeamContent({ title, about, website, services }) {
  return (
    <div className="ourteam-content">
      <h2>{title}</h2>
      <p>{about}</p>
      <ul>
        {services?.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p>
        <strong>Contact Us:</strong>
      </p>
      <ul>
        <li>Email: info@greenfieldsolutions.com</li>
        <li>Phone: +1 (800) 555-1234</li>
      </ul>
      <Button
        text={"Visit Our Website"}
        customClick={() => {
          window.open(website, "_blank");
        }}
      />
    </div>
  );
}
