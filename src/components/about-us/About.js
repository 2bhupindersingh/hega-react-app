import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import SectionHeading from "../section-heading/SectionHeading";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <SectionHeading title="About" subTitle="Us" />
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button className="btn">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
