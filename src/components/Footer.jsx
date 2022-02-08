import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
function Footer() {
    return (
        <footer>

            <i className="mdi mdi-chevron-double-up page-link" dest="home"></i>

            <div className="icon-wrap flex row">
                <a href="https://www.linkedin.com/in/souradip-mandal-046b08193/">
                    <div className="flex icon" id="icon-2">

                        <LinkedInIcon />
                    </div>
                </a>
                <a href="https://www.facebook.com/souradip.mandal.75/">
                    <div className="flex icon" id="icon-3">

                        <FacebookIcon />
                    </div>
                </a>
                <a href="https://www.instagram.com/deep_2609/">
                    <div className="flex icon" id="icon-4">

                        <InstagramIcon />
                    </div>
                </a>
                <a href="https://github.com/deep2609">
                    <div className="flex icon" id="icon-5">

                        <GitHubIcon />
                    </div>
                </a>
            </div>
            <div className="info-box">
                <div className="footnote">
                    SOURADIP MANDAL <span className="highlight">&copy;2022</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;