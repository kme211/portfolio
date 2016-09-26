import React, {PropTypes} from 'react';

const SideBar = () => {
  return (
    <aside className="about__strengths">
      <header className="sub-header">Strengths</header>
      <ul className="strengths__list">
        <li>JavaScript</li>
        <li>ES2015</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>Webpack</li>
        <li>Mocha</li>
        <li>Enzyme</li>
      </ul>
    </aside>
  );
};

export default SideBar;
