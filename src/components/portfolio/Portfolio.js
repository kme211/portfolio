import React, {PropTypes} from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = ({items, onClick}) => {
  return (
    <ul className="portfolio__list" onClick={onClick}>
      {items.map((item, index) => <PortfolioItem key={index} {...item}/>)}
    </ul>
 );
};

Portfolio.propTypes = {
  items: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Portfolio;
