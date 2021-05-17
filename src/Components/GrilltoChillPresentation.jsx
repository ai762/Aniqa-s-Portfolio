import React from "react";
import img1 from "../grilltochill/1.png";
import img2 from "../grilltochill/2.png";
import img3 from "../grilltochill/3.png";
import img4 from "../grilltochill/4.png";
import img5 from "../grilltochill/5.png";
import img6 from "../grilltochill/6.png";
import img7 from "../grilltochill/7.png";
import img8 from "../grilltochill/8.png";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const GrilltoChillPresentation = () => {
    return(
        <React.Fragment>
        <div className = "grilltochilli-ppt-div">
            <h1>Grill To Chilli Project Presentation</h1>
            <hr /> 
        </div> 
<div className = "crousal-div">            
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 w3-animate-fading" src={img1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img3} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img4} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img5} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img6} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img7} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 w3-animate-fading" src={img8} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="" aria-hidden="true" id = "back-icon"><ArrowBackIosIcon id = "back-icon"/></span> 
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span className="" aria-hidden="true" id = "back-icon"><ArrowForwardIosIcon id = "back-icon" /></span>  
  </a>
</div>
</div> 
        </React.Fragment>
    );
}
export default GrilltoChillPresentation;