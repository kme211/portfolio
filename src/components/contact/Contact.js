import React, {PropTypes} from 'react';
import Link from '../common/FancyLink';

const Contact = () => {
  return (
    <section id="contact">
      <header>Connect</header>
      <p>
        Please feel free to connect with
        me on <Link url="https://twitter.com/kearieggers" text="Twitter"/>, <Link url="https://www.linkedin.com/in/keari" text="LinkedIn"/>  or
        check out my code on <Link url="https://github.com/kme211" text="GitHub"/>.
      </p>
    </section>
  );
};

export default Contact;
