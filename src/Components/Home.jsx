import React from "react";
import Typed from "react-typed";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Pricing from "./Pricing";
import {Redirect, Route, Switch } from "react-router-dom";
import { Link } from "react-scroll";

const contact = "./Contact.jsx";
const Home = () => {
    return(
        <React.Fragment>
            <div id = "home">
            <div className = "header-wraper">
                <div className = "main-info">
                    <h1>Web Developer And Web Designer</h1>
                    <Typed className = "typed-text"
                    strings = {["Web Designer" , "Web Developer" , "Web Application Pentester" , "Graphics Designer" , "Virtual Assistant" , "Frontend Development Trainer" , "Adds Social Media Marketing" , "Content Writer"]}
                    typeSpeed = {40}
                    backSpeed = {60} />
                    <Link className = "contact-btn" to="contact" smooth = {true} duration = {1000}>Contact Me</Link>
                </div>
            </div>
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Pricing />
            <Contact />
            </div>
        </React.Fragment>
    );
   
}

export default Home;