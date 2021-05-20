import React from "react";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import {Redirect, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Bottom from "./Components/Bottom";
import Skills from "./Components/Skills";
import Pricing from "./Components/Pricing";
import BecomeClient from "./Components/BecomeClient";

// import Particles from "react-particles-js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/skills" component = {Skills}/>
        <Route exact path = "/services" component = {Services}/>
        <Route exact path = "/portfolio" component = {Portfolio}/>
        <Route exact path = "/pricing" component = {Pricing}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Redirect to = "/" />
        </Switch>
        {/* <About />
        <Skills />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact /> */}
        {/* <Contact /> */}
        <BecomeClient/>
        <Bottom />
       
      
    
    </React.Fragment>
  );
    
}

export default App;
