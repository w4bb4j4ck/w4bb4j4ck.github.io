import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render(){
        return(
            <>
            <div className="about">
                <img src="/images/about.jpg" alt="blaze"/>
                <div className="about-info">
                    <h1>About Me</h1>
                    <h2>Hello, I'm Billy Blaze.</h2>
                    <p>I've had a very strong interest in building things and solving problems with logic for as long as 
                        I can remember. My focus and passion as a Software Developer has grown exponentially over the years, 
                        now I'm looking forward to applying my years of broad knowledge and expertise to help drive and support 
                        a company’s vision and add value wherever I am able.</p>
                </div>
            </div>
            </>
        )
    }
}

export default About;