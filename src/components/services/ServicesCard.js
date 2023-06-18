import React from "react";

const ServicesCard = ({ icon, title, paragrapgh }) => {
  return (
    <article className="service">
      <span className="service-icon">{icon}</span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{paragrapgh}</p>
      </div>
    </article>
  );
};

export default ServicesCard;
