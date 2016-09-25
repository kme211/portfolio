import React, {PropTypes} from 'react';

const Button = ({url, text}) => {
  return (
    <a href={url} className="button-teal" role="button" target="_blank">{text}</a>
  );
};

Button.propTypes = {
  url: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Button;
