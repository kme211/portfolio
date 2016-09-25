import React, {PropTypes} from 'react';

const MenuButton = ({onClick}) => {
  return (
    <span className="icon icon-menu" id="menu-icon" onClick={onClick}/>
  );
};

MenuButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default MenuButton;
