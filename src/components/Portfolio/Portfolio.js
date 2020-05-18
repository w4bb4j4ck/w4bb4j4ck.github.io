import React, {Component} from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.css';

class Portfolio extends Component {
    render(){
        return(
            <div className="portfolio">
                <PortfolioList />
            </div>
        )
    }
}

export default Portfolio;