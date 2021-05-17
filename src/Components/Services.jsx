import React from "react";
import { Grid } from "@material-ui/core";


const Services = () => {
    return(
        <React.Fragment>
        <div className = "inner-services-div">
            <h1 className = "">My Services</h1>
            <hr /> 
        </div> 
        <Grid item xs = {12} container className = "outer-services-grid" spacing = {3}>
            <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = "inner-services-grid">
               <div className = "inner-inner-services-div"> 
               <img src = "https://img.icons8.com/ios/452/web-design.png"/>
               <h4>Web Designer</h4>
               <p>I am a Web Designer and i can design your website more attractive. I approach each project individually, listening your requirements carefully and focus on the results with full of perfections.</p>
               </div>
            </Grid>
            <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = "inner-services-grid">
                <div className = "inner-inner-services-div"> 
                <img src = "https://image.flaticon.com/icons/png/512/84/84471.png"/>
                <h4>Web Development</h4>
                <p>I am a Web Developer and i can develop a responsive websites with few lines of code. Your website will be build with the new proven technologies. It will also be user friendly as well.</p>
                </div>
           </Grid>
           <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = "inner-services-grid">
                <div className = "inner-inner-services-div"> 
                <img src = "https://cdn.iconscout.com/icon/free/png-512/content-writing-1405748-1185046.png"/>
                <h4>Content Writing</h4>
                <p>I am also a content writer. I write contents that engage your customer with your services and also build greatest understanding level between clients and your website. </p>
                </div>
           </Grid>
           <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = "inner-services-grid">
                <div className = "inner-inner-services-div"> 
                <img src = "https://image.flaticon.com/icons/png/512/102/102649.png"/>
                <h4>Penetration Testing</h4>
                <p>I am also a pen tester and i will exploit all possible vulnerabilities in your particular website as well as provide you quick mitigation to patch against each vulnerability before exploitation. I will report you in case of any sensitive information explosure and also provide you quick fixation.</p>
                </div>
           </Grid>
           <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = "inner-services-grid">
                <div className = "inner-inner-services-div"> 
                <img src = "http://simpleicon.com/wp-content/uploads/target.png"/>
                <h4>Social Media Marketing</h4>
                <p>I will also publish your services on all possible social media platform and providing knowledge about your services to your clients. And will also using effective tectics to grab them towards your products.</p>
                </div>
           </Grid>
           </Grid> 
        </React.Fragment>
    );
}

export default Services;