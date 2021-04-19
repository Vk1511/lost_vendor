import React from 'react';
import './ContactUs.css';
import ContactUsLogo from '../../Assets/Images/contact.svg';
import Tilt from 'react-tilt';

function ContactUs() {
    return (
        <div className="ContactContainer">
            
            <div className="ContactAnimation">
                <Tilt className="Tilt">
                    <img className="ContactUsLogo" src={ContactUsLogo} alt="contactuslogo"/>
                </Tilt>
            </div>
            <div className="ContactForm">
                <div className="contactUs_form">
                    <div className="form_title">
                        Get In Touch!
                    </div>
                    <form className="form_field">
                        <div className="input_field">
                            <label for="first_name">Full Name:</label>
                            <input type="text" name="first_name" required/>
                        </div>
                        <div className="input_field">
                            <label for="Email">Email:</label>
                            <input type="mail" name="Email" required/>
                        </div>
                        <div className="input_field">
                            <label for="Contact_Number">Contact Number:</label>
                            <input type="number" name="Contact_Number" />
                        </div>
                        <div className="input_field">
                            <label for="feedback">Write Your Message:</label>
                            <textarea name="feedback" required className="textara_box"/>
                        </div>
                        <div className="check_class"><input type="checkbox" name="call_request"/><label for="call_request">Want Call Back?</label></div>
                        <div className="input_field sub_btn">
                            <input type="submit" value="Submit" className="submit"/>
                        </div>
                    </form>
                </div>
            </div> 
            
        </div>
    )
}

export default ContactUs
