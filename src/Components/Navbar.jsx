import React from "react";
import DehazeIcon from '@material-ui/icons/Dehaze';
// import { Link } from "react-router-dom";
import logo from '../images/portfolio-01.png';
// import { Link } from "react-scroll";
import {HashLink as Link} from "react-router-hash-link";


const Navbar = (e) => {
 
return(
<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className = "container">
<Link className="navbar-brand" smooth to="#">ANIQA AYUB</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <DehazeIcon id = "toggler"/>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" smooth to="#home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#skills">Skills</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#pricing">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#contact">Contact</Link>
      </li>
      </ul>
  </div>  
  </div>
</nav>
</React.Fragment>
    );
}
export default Navbar;