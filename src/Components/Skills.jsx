import React from "react";
import { Grid } from "@material-ui/core";

const Skills = () => {
    return(
        <React.Fragment>
          <div className = "skills-div" id = "skills">
            <div className = "inner-services-div">
              <h1 id = "aboutMySKills">About My Skills</h1>
              <hr /> 
            </div>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <div className = "percentage-div">
         <h6>CSS<span style = {{float: 'right'}}>99%</span></h6>
         </div>
           <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '99%', zIndex:'2'}}></div>
          </div>
      </div>
      <div className="col-sm">
       <div className = "percentage-div">
         <h6>HTML<span style = {{float: 'right'}}>100%</span></h6>
       </div>
       <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '100%', zIndex:'2'}}></div>
       </div>
     </div>
  </div>
  <div className="row">
    <div className="col-sm">
       <div className = "percentage-div">
         <h6>JAVASCRIPT<span style = {{float: 'right'}}>80%</span></h6>
       </div>
       <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '80%', zIndex:'2'}}></div>
       </div>
    </div>
  <div className="col-sm">
    <div className = "percentage-div">
        <h6>WORDPRESS<span style = {{float: 'right'}}>70%</span></h6>
    </div>
       <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '70%',zIndex:'2'}}></div>
       </div>
  </div>
  </div>
  <div className="row">
    <div className="col-sm">
       <div className = "percentage-div">
         <h6>ILLUSTRATOR<span style = {{float: 'right'}}>90%</span></h6>
       </div>
       <div className="progress">
         <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '90%', zIndex:'2'}}></div>
       </div>
    </div>
    <div className="col-sm">
     <div className = "percentage-div">
        <h6>PHOTOSHOP<span style = {{float: 'right'}}>70%</span></h6>
     </div>
     <div className="progress">
       <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '70%', zIndex:'2'}}></div>
     </div>
     </div>
</div>
<div className="row">
    <div className="col-sm">
      <div className = "percentage-div">
       <h6>WEB APPLICATION PENTESTING<span style = {{float: 'right'}}>90%</span></h6>
       </div>
       <div className="progress">
         <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '90%', zIndex:'2'}}></div>
       </div>
    </div>
    <div className="col-sm">
     <div className = "percentage-div">
       <h6>BRANDING & LOGO DESIGN<span style = {{float: 'right'}}>80%</span></h6>
     </div>
     <div className="progress">
       <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '80%', zIndex:'2'}}></div>
     </div>
    </div>
</div>
<div className="row">
    <div className="col-sm">
      <div className = "percentage-div">
       <h6>CONTENT WRITING<span style = {{float: 'right'}}>90%</span></h6>
       </div>
       <div className="progress">
         <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '90%', zIndex:'2'}}></div>
       </div>
    </div>
    <div className="col-sm">
     <div className = "percentage-div">
       <h6>SOCIAL MEDIA MARKETING<span style = {{float: 'right'}}>80%</span></h6>
     </div>
     <div className="progress">
       <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"  style={{width: '80%', zIndex:'2'}}></div>
     </div>
    </div>
</div>
</div>
</div>
</React.Fragment>
    );
}
export default Skills;