import React, {PropTypes} from 'react';
import Button from '../common/Button';

const Splash = () => {
  return (
    <section id="splash" className="splash">
      <header className="section-header">Keari Eggers</header>
      <div className="splash__tag">Front-end Web Developer</div>
      <div className="splash__social-buttons">
        <Button url="https://github.com/kme211" text="GitHub"/>
        <Button url="https://twitter.com/kearieggers" text="Twitter"/>
        <Button url="https://www.linkedin.com/in/keari" text="LinkedIn"/>
      </div>
    </section>
  );
};

export default Splash;
