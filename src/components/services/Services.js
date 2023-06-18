import React from "react";
import ServicesCard from "./ServicesCard";
import SectionHeading from "../section-heading/SectionHeading";

const Services = () => {
  const cardsData = [
    {
      icon: <i className="fas fa-wallet fa-fw"></i>,
      title: "saving money",
      paragrapgh: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      icon: <i className="fas fa-tree fa-fw"></i>,
      title: "endless hiking",
      paragrapgh: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores, officia.`,
    },
    {
      icon: <i className="fas fa-socks fa-fw"></i>,
      title: "amazing comfort",
      paragrapgh: ` Lorem ipsum consectetur adipisicing elit.
        Asperiores, officia.`,
    },
  ];
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <SectionHeading title='Our' subTitle='Services' />
      </div>
      <div className="section-center services-center">
        {cardsData.map((card, index) => (
          <ServicesCard
            key={index}
            icon={card.icon}
            title={card.title}
            paragrapgh={card.paragrapgh}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
