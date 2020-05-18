import React, {Component} from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './Contact.css';

class Contact extends Component {
    render(){
        return(
            <>
            <div className="contact">
                <h1>Contact Us</h1>
                <div className="contact-options">
                    <div className="option">
                        <PhoneAndroidIcon fontSize="large" />
                        <h4>Phone</h4>
                        <p>(612) 772-8327</p>
                    </div>
                    <div className="option">
                        <MailOutlineIcon fontSize="large" />
                        <h4>Email</h4>
                        <p>blyblz5@gmail.com</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Contact;