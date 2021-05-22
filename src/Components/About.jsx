import React from "react";
import SecurityIcon from '@material-ui/icons/Security';
import BrushIcon from '@material-ui/icons/Brush';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Contact from "./Contact";


const About = () => {
return(
<React.Fragment>
   <div className = "about-me-grid" id = "about">
        <div className = "inner-services-div">
            <h1>About Me</h1>
            <hr /> 
        </div>  
<div className="container">
  <div className="row">
    <div className="col-sm">
    <p>Hi there! this is Aniqa an UI/UX Designer and Software Developer. I am also a Web Application Penetration Tester / infrastructure pentester. I can design / develop your website with attractive and meaningful contents. Because i am also a content writer as well. I can build your website too attractive, responsive and highly secure as well.</p>
                   <p>I can be your next <strong>Web Designer / Developer, Pentester and Content Writer</strong> in future.</p>
                   <p><strong>Email:</strong>{" "}aniqaayub6@gmail.com</p>
                   <p><strong>Phone:</strong>{" "}+92 317 5637628</p>
                   <p><strong>City:</strong>{" "}Rawalpindi, Pakistan</p>
                   <a href = "https://www.facebook.com/profile.php?id=100052045482259"><FacebookIcon id = "aboutIcon" /></a>
                   <a href = "https://www.instagram.com/aniqa7697/"><InstagramIcon id = "aboutIcon" /></a>
                   <a href = "https://www.linkedin.com/feed/"><LinkedInIcon id = "aboutIcon" /></a>
                   <a href = "https://twitter.com/AyubAniqa"><TwitterIcon id = "aboutIcon" /></a>
                   <a href = "#"><YouTubeIcon id = "aboutIcon" /></a>
                   <a href = "https://github.com/aniqaayub"><GitHubIcon id = "aboutIcon" /></a>  
    </div>
<div className="col-sm">
    <p><BrushIcon /> {" "}DESIGNING<span style = {{float: 'right'}}>99%</span></p>
                   <div className="progress">
                   <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '99%', backgroundColor: 'black'}}></div>
                   </div>
                   <p><DesktopMacIcon />{" "}DEVELOPMENT<span style = {{float: 'right'}}>99%</span></p>
                   <div className="progress">
                   <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '99%', backgroundColor: 'black'}}></div>
                   </div>
                   <p><SecurityIcon />{" "}PENTESTING<span style = {{float: 'right'}}>90%</span></p>
                   <div className="progress">
                   <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '90%', backgroundColor: 'black'}}></div>
                   </div>
                   <p><TrackChangesIcon />{" "}MARKETING<span style = {{float: 'right'}}>80%</span></p>
                   <div className="progress">
                   <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '80%', backgroundColor: 'black'}}></div>
                   </div>
                   <p><AssignmentIcon />{" "}CONTENT WRITING<span style = {{float: 'right'}}>90%</span></p>
                   <div className="progress">
                   <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '90%', backgroundColor: 'black'}}></div>
                   </div>
    </div>
  </div>
</div>
</div>
</React.Fragment>
    );
}

export default About;