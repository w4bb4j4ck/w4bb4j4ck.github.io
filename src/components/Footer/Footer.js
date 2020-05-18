import React, {Component} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="social-media">
                    <div className="social-icon">
                        <a href="https://github.com/w4bb4j4ck">
                            <GitHubIcon />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/billyblaze/">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
                &copy; Billy Blaze
            </footer>
        )
    }
}

export default Footer;