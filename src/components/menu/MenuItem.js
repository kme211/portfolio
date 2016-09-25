import React, {PropTypes} from 'react';
import kebabCase from 'lodash/kebabCase';

const MenuItem = ({name}) => {
  return (
    <li><a href={`#${kebabCase(name)}`} className="menu__item">{name}</a></li>
  );
};

MenuItem.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default MenuItem;
