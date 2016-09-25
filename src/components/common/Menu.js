import React, {PropTypes} from 'react';
import MenuItem from './MenuItem';

const Menu = ({pages}) => {
  return (
    <nav className="menu" aria-label="Page">
      {pages.map((p, i) => <MenuItem key={i} name={p}/>)}
    </nav>
  );
};

Menu.propTypes = {
  pages: React.PropTypes.array.isRequired
};
