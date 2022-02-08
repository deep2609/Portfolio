import React from "react";

function Contact() {
    return (
        <section id="contact">

            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
            </svg>
            <div className="container flex">
                <div className="header waypoint" data-animation="slide-in-left">
                    CONTACT
                </div>
                <div className="header-bar waypoint" data-animation="slide-in-right" data-delay=".25s"></div>
                
                
                <form className="waypoint" data-animation="pop-in" data-delay=".5s" id="contact-form">
                    <input placeholder="Name" type="text" name="name" required />
                    <input placeholder="Enter email" type="email" name="email" required />
                    <textarea placeholder="Your Message" type="text" name="message"></textarea>
                    <div id="success">
                        <div>
                            Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span>
                        </div>
                    </div>
                    <input className="button" type="submit" id="submit" value="SUBMIT" />
                </form>

            </div>

        </section>
    )
}

export default Contact;