import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-info">
                    <h3>Welcome</h3>
                    <h1>I'm a Software Engineer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua</p>
                </div>
                <Button variant="contained" size="large" color="primary"
                href="https://drive.google.com/open?id=1e32nsGKam9PkMht3v_3BRLxlqH74c9X4">Download CV</Button>
            </div>
        )
    }
}

export default Home;