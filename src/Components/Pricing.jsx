import React from "react";
import { Link } from "react-scroll";


const contact = "./Contact.jsx";
const Pricing = () => {
return(
<React.Fragment>
<div className = "outer-card-div" id = "pricing">
    <div className = "inner-services-div">
      <h1 className = "">PRICING</h1>
      <hr /> 
    </div> 
  <div className="container">
   <div className="row">
     <div className="col-sm">
       <div className="card">
               <div className="card-body">
                <h5 className="card-title">BASIC</h5>
                <h6 className="card-title">GOOD CHOICE</h6>
                <hr />
                <h1><sup>$</sup>15</h1>
                <h6 className="card-subtitle mb-2 text-muted">FREE SUPPORT</h6>
                <h6 className="card-subtitle mb-2 text-muted">15 DEMOS INCLUDED</h6>
                <h6 className="card-title">NEWSLETTER</h6>
                <p className="card-text" id = "noWorkingContact">WORKING CONTACT FORM</p>
                <Link className="card-link" to="contact" smooth = {true} duration = {1000}>INTERESTED</Link>
              </div>
        </div>
    </div>
  <div className="col-sm">
  <div className="card">
       <div className="card-body">
                <h5 className="card-title">ULTIMATE</h5>
                <h6 className="card-title">SPLENDID CHOICE</h6>
                <hr />
                <h1><sup>$</sup>30</h1>
                <h6 className="card-subtitle mb-2 text-muted">FREE SUPPORT</h6>
                <h6 className="card-subtitle mb-2 text-muted">15 DEMOS INCLUDED</h6>
                <h6 className="card-title">NEWSLETTER</h6>
                <p className="card-text">WORKING CONTACT FROM & ANIMATED WEBSITES</p>
                <Link className="card-link" to="contact" smooth = {true} duration = {1000}>INTERESTED</Link>
              </div>
           </div>
    </div>
    <div className="col-sm">
    <div className="card">
              <div className="card-body">
              <h5 className="card-title">ADVANCED</h5>
              <h6 className="card-title">BEST CHOICE</h6>
              <hr />
              <h1><sup>$</sup>20</h1>
              <h6 className="card-subtitle mb-2 text-muted">FREE SUPPORT</h6>
              <h6 className="card-subtitle mb-2 text-muted">15 DEMOS INCLUDED</h6>
              <h6 className="card-title">NEWSLETTER</h6>
              <p className="card-text"> WORKING CONTACT FROM</p>
              <Link className="card-link" to="contact" smooth = {true} duration = {1000}>INTERESTED</Link>
            </div>
         </div>
    </div>
  </div>
</div>
</div>
   </React.Fragment>
    );
}
export default Pricing;
