import React, {PropTypes} from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';

class MenuContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    
    return (
      <div>
        <Menu pages={['About', 'Portfolio', 'Contact']} showMenu={this.state.showMenu}/>
        <MenuButton onClick={this.toggleMenu}/>
      </div>
    );
  }
}

export default MenuContainer;
