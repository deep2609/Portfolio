import React from "react";
import CustomizedDialogs from "./Resume"
function Home() {
    return (
        <section id="home" className="flex height-fix">
            <div id="pt" className="canvas"><img src="./BG.jpg" alt="background" style={{ height: "100%", width: "100%" }} /></div>
            <div className="heading" style={{ width: " 38%", paddingRight: "55%" }}>
                <div className="text">
                    Namaste, I'm <span className="highlight">Souradip Mandal</span>
                    <br /> I'm <span id="traits"></span>

                </div>
                <div data-animation="slide-in-left" data-delay=".5s"></div>
                <div className="button page-link" dest="about" style={{
                    marginBottom: "20px",
                    paddingRight: "40px",
                    width: "200px"
                }}>
                    View my work <i className="mdi mdi-arrow-right"></i>
                </div>
                <CustomizedDialogs />

                <nav className="flex">
                    <div className="link-wrap">
                        <div className="active page-link" dest="home">home</div>
                        <div className="page-link" dest="about">about</div>
                        <div className="page-link" dest="portfolio">projects</div>
                        <div className="page-link" dest="blog">competitive-programming</div>
                        <div className="page-link" dest="contact">contact</div>
                    </div>
                    <i className="mdi mdi-menu"></i>
                </nav>
            </div>
        </section>

    )
}

export default Home;