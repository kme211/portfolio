import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import MenuContainer from './components/menu/MenuContainer';
import Splash from './components/splash/Splash';
import About from './components/about/About';
import PortfolioContainer from './components/portfolio/PortfolioContainer';
import Contact from './components/contact/Contact';
import './styles/styles.css';
import 'font-awesome/css/font-awesome.css';

render(
  <div>
    <MenuContainer/>
    <Splash/>
    <About/>
    <PortfolioContainer/>
    <Contact/>
  </div>,
  document.getElementById('app')
);
