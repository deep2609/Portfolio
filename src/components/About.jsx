import React from "react";

function About(){
    return (
        <section id="about">
            <div className="container flex">
                <div className="header waypoint" data-animation="slide-in-left">
                    ABOUT
                </div>
                <div className="header-bar" data-animation="slide-in-left" data-delay=".5s" style={{marginBottom: "40px"}}>

                </div>
                <span className="header">Hi, I'm Souradip Mandal</span>
                <br />
                <div className="flex row label-wrap">


                    <div className="skills-wrapper flex column-gt-sm" style={{width: "100%"}}>

                        <div className="flex flex-gt-sm waypoint" data-animation="slide-in-left">

                            <div className="row">
                                <div className="column">
                                    <span style={{alignSelf: "center"}}><img src="me.jpg" className="me"
                      style={{alignSelf: "center", paddingLeft: "10%", paddingRight: "10%" ,paddingBottom: "5%"}} /></span>
                                    {/* <img className="up-arrow" src="img/up-arrow.png" /> */}
                                    <div>
                                        <div data-aos='fade-left' className="col-lg-7 col">
                                            {/* <div className="lead">
                                                <strong className="lead">Date of Birth : </strong> 26th September 1999
                                            </div> */}
                                            <div className="lead">
                                                <strong className="lead">Name : </strong> Souradip Mandal
                                            </div>
                                            <div className="lead">
                                                <strong className="lead">City : </strong> New Delhi, India
                                            </div>
                                            <div className="lead">
                                                <strong className="lead">Email : </strong> souradipmandal0926@gmail.com
                                            </div>
                                            <div className="lead">
                                                <strong className="lead">Education : </strong> B-Tech
                                            </div>
                                            <div className="lead">
                                                <strong className="lead">Institution : </strong> Indian Institute of Technology, Varanasi
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column" style={{paddingTop: "10%"}}>
                                    <div className="label bold">Who's this guy?</div>
                                    <div>
                                        Hi, I am Souradip Mandal, currently pursuing my b-tech from IIT(BHU) Varanasi. I am a self taught programmer. My programming interests and expertise include full-stack web development and competitive programming. I love building elegant looking websites
                                        with a clean and presentable design, a user friendly interface and a well structured code. Besides, I have in-depth knowledge of advanced Data Structures and Algorithms. Feel free to drop a message or reach me at
                                        the mail provided.
                                        <br />

                                        <br />
                                        <span className="page-link highlight" dest="contact">Let's make something special.</span>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="flex flex-gt-sm waypoint bars-wrap" data-animation="slide-in-right">
                            <span className="header" style={{paddingTop: "7%", paddingBottom: "0"}}>Tech Stack</span>
                            <div className="header-bar" data-animation="slide-in-left" data-delay=".5s" style={{marginBottom: "40px"}}>
                            </div>
                            <div className="row">

                                <div data-aos="fade-up" className="column col-lg-6">

                                   
                                    <p className="lead text-center">A list of the various languages, frameworks and utilities that I use</p>
                                    <div className="text-center">
                                        <img className="tech-logo" src="https://cdn.svgporn.com/logos/c-plusplus.svg" alt="C++" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo" src="https://cdn.svgporn.com/logos/python.svg" alt="Python" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo" src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML-5" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo" src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS-3" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo tech-logo-sm" src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="Bootstrap" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo tech-logo-sm" src="https://cdn.svgporn.com/logos/javascript.svg" alt="Javascript" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo tech-logo-sm" src="https://cdn.svgporn.com/logos/react.svg" alt="react" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo tech-logo-sm" src="https://cdn.svgporn.com/logos/nodejs.svg" alt="nodeJS" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo tech-logo-sm" src="https://cdn.svgporn.com/logos/flutter.svg" alt="nodeJS" style={{width: "15%", height: "10%"}} />
                                        <img className="tech-logo" src="https://cdn.svgporn.com/logos/jquery.svg" alt="jquery" style={{width: "20%", height: "15%"}} />


                                        <img className="tech-logo" src="https://cdn.svgporn.com/logos/mongodb.svg" alt="mongodb" style={{width: "20%", height: "15%"}} />
                                    </div>
                                </div>
                                <div className="column" style={{paddingTop: "10%"}}>
                                    <div>
                                        <div className="bar flex">
                                            <div className="bar fill" style={{width: "90%"}}>
                                                <div className="tag bold flex">C++</div>
                                            </div>
                                            <span>90%</span>
                                        </div>

                                        <div className="bar flex">
                                            <div className="bar fill" style={{width:" 80%"}}>
                                                <div className="tag bold flex">JavaScript</div>
                                            </div>
                                            <span>80%</span>
                                        </div>


                                        <div className="bar flex">
                                            <div className="bar fill" style={{width: "70%"}}>
                                                <div className="tag bold flex">React</div>
                                            </div>
                                            <span>70%</span>
                                        </div>
                                        <div className="bar flex">
                                            <div className="bar fill" style={{width: "80%"}}>
                                                <div className="tag bold flex">HTML</div>
                                            </div>
                                            <span>80%</span>
                                        </div>
                                        <div className="bar flex">
                                            <div className="bar fill" style={{width: "70%"}}>
                                                <div className="tag bold flex">CSS</div>
                                            </div>
                                            <span>70%</span>
                                        </div>


                                        <div className="bar flex">
                                            <div className="bar fill" style={{width: "60%"}}>
                                                <div className="tag bold flex">python</div>
                                            </div>
                                            <span>60%</span>
                                        </div>


                                        <div className="bar flex">
                                            <div className="bar fill" style={{width: "75%"}}>
                                                <div className="tag bold flex">Node.js</div>
                                            </div>
                                            <span>75%</span>
                                        </div>

                                        <div className="bar flex">
                                            <div className="bar fill" style={{width:"75%"}}>
                                                <div className="tag bold flex">MongoDB</div>
                                            </div>
                                            <span>75%</span>
                                        </div>
                                        <div className="bar flex">
                                            <div className="bar fill" style={{width:"65%"}}>
                                                <div className="tag bold flex">Flutter</div>
                                            </div>
                                            <span>65%</span>
                                        </div>
                                    </div>



                                </div>
                            </div>





                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default About;