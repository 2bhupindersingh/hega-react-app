import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import FeaturedCard from "./FeaturedCard";
import aboutImg from "../../assets/images/about.jpg";
import javaImg from "../../assets/images/banner-img.jpg";
import honKongImg from "../../assets/images/hong-kong-img.jpg";

const FeaturedTour = () => {
  const cardsData = [
    {
      featuredImg: aboutImg,
      tourDate: `August 26th, 2020`,
      title: "Tibet Adventure",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      featuredImg: javaImg,
      tourDate: `October 1th, 2020`,
      title: "Best Of Java",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    },
    {
      featuredImg: honKongImg,
      tourDate: `September 15th, 2020`,
      title: "Explore Hong Kong",
      paragraph: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <SectionHeading title='Featured' subTitle='Tours' />
      </div>

      <div className="section-center featured-center">
        {cardsData.map((card, index) => (
          <FeaturedCard
            key={index}
            featuredImg={card.featuredImg}
            tourDate={card.tourDate}
            title={card.title}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTour;
