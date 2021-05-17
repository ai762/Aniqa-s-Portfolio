import React from "react";
import img1 from "../siss/1.png";
import img2 from "../siss/2.png";
import img3 from "../siss/3.png";
import img4 from "../siss/4.png";
import img5 from "../siss/5.png";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const SissPresentation = () => {
    return(
        <React.Fragment>
<div className = "grilltochilli-ppt-div">
    <h1>SISS Project Presentation</h1>
    <hr /> 
</div> 
<div className = "crousal-div">            
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img4} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img5} alt="Third slide" />
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
export default SissPresentation;