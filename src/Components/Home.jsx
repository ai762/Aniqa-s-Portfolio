import React from "react";
import Typed from "react-typed";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Pricing from "./Pricing";
import PortfolioComponent from "./PortfolioComponent";
import {Redirect, Route, Switch } from "react-router-dom";

const contact = "./Contact.jsx";
const Home = () => {
    return(
        <React.Fragment>
            <div className = "header-wraper">
                <div className = "main-info">
                    <h1>Web Developer And Web Designer</h1>
                    <Typed className = "typed-text"
                    strings = {["Web Designer" , "Web Developer" , "Web Application Pentester" , "Graphics Designer" , "Virtual Assistant" , "Frontend Development Trainer" , "Adds Social Media Marketing" , "Content Writer"]}
                    typeSpeed = {40}
                    backSpeed = {60} />
                    <a href = "contact" className = "contact-btn">Contact Me</a>
                </div>
            </div>
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Pricing />
            <Contact />
        </React.Fragment>
    );
   
}

export default Home;