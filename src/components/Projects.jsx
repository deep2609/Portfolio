import React from "react";
import MediaCard from "./Card"
function Projects() {
    return (
        <section className="flex" id="portfolio">
            <div className="header waypoint" data-animation="slide-in-right">
                PROJECTS
            </div>
            <div className="header-bar waypoint" data-animation="slide-in-right" data-delay=".3s"></div>

            <div className="filter-wrap waypoint" data-animation="fade-in">

                <div className="float-bar" style={{ width: "0px", height: "0" }}>
                    <div className="flex row" style={{ width: "0px" }}>

                        <div className="filter" data-filter=".rails"></div>


                    </div>
                </div>
            </div>

            <div className="row" style={{ width: "100%", alignContent: "center" }}>
                <div className="col" style={{ width: "100%", paddingLeft: "12%", paddingRight: "1.5%" }}>
                    <MediaCard imgSrc="./vaccine-info-cartoon.webp" title="Vaccine-info" tech="Tech stack used : HTML, CSS, bootstrap, JavaScript, NodeJS, node-mailer, MongoDB" source="https://vaccine-info-2021.herokuapp.com/"
                        content=" A Vaccine-Notifier which sends email alerts whenever a slot is available in the nearby
vaccination centres. It uses Cowin APIs to fetch real-time Data. Includes additional features like check
available slots, Covid-19 live statistics and Latest news related to Covid.
"></MediaCard>
                </div>
                <div className="col" style={{ width: "100%", paddingRight: "1.5%" }}>
                    <MediaCard imgSrc="https://miro.medium.com/max/702/1*Ra02AqsQlC0KV229EvM98g.png" title="CF-Analyzer" source="http://cf-analyzer.herokuapp.com/"
                        tech="Tech stack used : HTML, CSS, bootstrap, Javascript, NodeJS, CodeForces API, Google Chart API" content="Provides a visual analysis of a user's progress on CodeForces coding platform using the
CodeForces API and Google Chart API. Additionally, it provides a Random Problem Generator as
per the uder's strong and weak topics.
"
                    />
                </div>
                <div className="col" style={{ width: "100%", paddingRight: "1.5%" }}>
                    <MediaCard imgSrc="https://c1.wallpaperflare.com/preview/591/997/186/platter-food-delicious-food-restaurant.jpg" title="FoodVibes"
                        content="Find a meal that matches your vibe. It uses the spoonacular API to display the recipes of your favourite dishes. Additionally the user can login, save their favourite recipes, comment/rate the recipes as well as create their own recipes to share with others." tech="Tech stack used : ReactJS, Material UI, react-bootstrap, NodeJS, MongoDB"
                    />
                </div>

            </div>
            <div className="row" style={{ width: "100%", alignContent: "center", paddingTop: "5%" }}>
                <div className="col" style={{ width: "100%", paddingLeft: "12%", paddingRight: "5%" }}>
                    <MediaCard imgSrc="./portfolio-bg.PNG" title="Portfolio" source="#home"
                       tech="Tech stack used : ReactJS, Material UI, CSS" content="A portfolio website."
                    />
                </div>
                <div className="col" style={{ width: "100%", paddingRight: "6%" }}>
                    <MediaCard imgSrc="https://www.rd.com/wp-content/uploads/2021/06/block-websites-on-chrome.jpg?fit=700,1024" title="WebsiteBlocker"
                        tech="Tech stack used : Python" content="A terminal application which helps the user block unwanted/distracting websites during work time."
                    />
                </div>
                <div className="col" style={{ width: "100%", paddingRight: "8%" }}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>and many small scale <br />projects...</h1>
                </div>
            </div>
        </section>
    )
}

export default Projects;