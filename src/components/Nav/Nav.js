import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render(){
        return(
            <>
            <div className="nav">
                <div className="nav-home">
                    <Link to='/'>
                        <h1>Blaze</h1>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to='/portfolio'>
                        <h5>Portfolio</h5>
                    </Link>
                    <Link to='/about'>
                        <h5>About</h5>
                    </Link>
                    <Link to='/contact'>
                        <h5>Contact</h5>
                    </Link>
                </div>
            </div>
            </>
        )
    }
}

export default Nav;