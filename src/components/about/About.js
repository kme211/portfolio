import React, {PropTypes} from 'react';
import SideBar from './SideBar';

const About = () => {
  return (
    <section id="about">
      <header className="section-header">About</header>
      <div className="about__container">
        <p className="about__body">
          I have a passion for coding and a special kind
          of <span className="text-emphasize">love for JavaScript</span>.
          I focus on writing <span className="text-emphasize">clean and
          performant</span> code and often lay awake at night thinking about how
          I can improve my code.
        </p>
        <SideBar/>
      </div>
    </section>
  );
};

export default About;
