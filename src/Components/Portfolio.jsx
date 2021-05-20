import React from "react";
import img1 from '../grilltochill/1.png';
import sissimg from '../siss/1.png';
import vector from '../grilltochill/vectorArt.jpg';
import banner from '../grilltochill/banner.jpg';
import banner1 from '../grilltochill/banner1.jpg';
import banner3 from '../grilltochill/banner3.jpg';
import flyers from '../grilltochill/flyers.jpeg';
import logo from '../grilltochill/logo.jpg';
import { Grid } from "@material-ui/core";
// import {Link } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";


const Portfolio = () => {
    return(
        <React.Fragment>
            <div id = "portfolio">
               <div className = "upper-portfolio-div">
            <h1>PORTFOLIO</h1>
            <h6>Presenting here my work during my learning phase.</h6>
        </div>
 
        <Grid item xs = {12} container className = "grid-spacing">
        <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {sissimg} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>SISS</h3>
                    <h4>React JS Project</h4>
                    <p>This is basic level project for a digital services which is basically designed by using <strong>ReactJS</strong></p>
                    <Link smooth to = "#portfolio" className = "portfolio-btn">Explore Me</Link>
                    </div>
          </Grid>
          <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {img1} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Grill To Chilli</h3>
                    <h4>React JS Project</h4>
                    <p>This is small level project for a resturant which is basically designed by using <strong>ReactJS</strong></p>
                    <Link smooth to = "#portfolio" className = "portfolio-btn">Explore Me</Link>
                    </div>
          </Grid>
          <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {banner1} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Sareaam Rawalpindi South</h3>
                    <h4>Banner/ Adobe Illustrator</h4>
                    <p>This banner was basically designed for <strong>Sareaam Team RWP South</strong></p>
                     <a href = "https://www.behance.net/aniqaayub" className = "portfolio-btn">Explore Me</a>
                    </div>
            </Grid>
            <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {banner} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Online  Expertise Co.</h3>
                    <h4>Banner/ Adobe Illustrator</h4>
                    <p>This banner was basically designed for a private corporation <strong>Online Expertise Co.</strong></p>
                     <a href = "https://www.behance.net/aniqaayub" className = "portfolio-btn">Explore Me</a>
                    </div>
            </Grid>
            <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {banner3} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Wall Of Hope</h3>
                    <h4>Banner/ Adobe Illustrator</h4>
                    <p>This banner was basically designed for a social working corporation which is <strong>Wall Of Hope</strong></p>
                     <a href = "https://www.behance.net/aniqaayub" className = "portfolio-btn">Explore Me</a>
                    </div>
            </Grid>
            <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {vector} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Vector Art for one of Client</h3>
                    <h4>Vector Illustration/ Adobe Illustrator</h4>
                    <p>This vector illustration was basically designed for <strong>one of my client within pakistan.</strong></p>
                     <a href = "https://www.behance.net/aniqaayub" className = "portfolio-btn">Explore Me</a>
                    </div>
            </Grid>
            <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {flyers} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Sareaam Rawalpindi South</h3>
                    <h4>Banner/ Adobe Illustrator</h4>
                    <p>This banner was basically designed for <strong>Sareaam Team RWP South</strong></p>
                     <a href = "https://www.behance.net/aniqaayub" className = "portfolio-btn">Explore Me</a>
                    </div>
            </Grid>
            <Grid item lg = {3} md = {4} sm = {12} xm = {12} className = "inner-grid-spacing">
                <div className = "portfolio-div">
                    <img src = {logo} alt = "Temporary error!" />
                </div>
                <div className = "portfolio-details-div">
                    <h3>Webstaurantdepot</h3>
                    <h4>Logo/ Adobe Illustrator</h4>
                    <p>This logo was basically designed for online store which is <strong>Webstaurantdepot</strong></p>
                     <a href = "https://www.behance.net/aniqaayub" className = "portfolio-btn">Explore Me</a>
                    </div>
              </Grid>
              </Grid>
              </div>  
        </React.Fragment>
    );
}

export default Portfolio;