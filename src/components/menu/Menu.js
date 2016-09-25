import React, {PropTypes} from 'react';
import MenuItem from './MenuItem';

const Menu = ({pages, showMenu}) => {
  let wrapperClass = "menu";
  if(showMenu) wrapperClass += " menu_visible";
  return (
    <nav className={wrapperClass} aria-label="Page">
      <ul>
        {pages.map((p, i) => <MenuItem key={i} name={p}/>)}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  pages: React.PropTypes.array.isRequired,
  showMenu: React.PropTypes.bool.isRequired
};

export default Menu;
