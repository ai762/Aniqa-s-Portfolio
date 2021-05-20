import React from "react";
import { Link } from "react-scroll";

const contact = "./Contact.jsx";
const BecomeClient = () => {
    return(
        <React.Fragment>
        <div className = "promises-div">
           <div className = "inner-services-div">
            <h1 className = "contact-h1">Become Client and Get Services</h1>
            <hr />
            </div>
            <h2>&#34;Promises&#34;</h2>
            <ul>
                <li>Your work is my work. I will do it by diligence and leisurely.</li>
                <li>I will complete your project two days before deadline.</li>
                <li>I have special discount for my regular clients</li>
                <li>If you dislike my work. I will definitely refund your amount.</li>
                <li>My work is my passion and i always do my work by my heart and i also try my level best.</li>
            </ul>
            <Link id = "becomeClientBtn" to="contact" smooth = {true} duration = {1000}>Become Client</Link>
            <h5>trainerhtml0@gmail.com</h5>
            <h5>+92 317 5637628</h5>
        </div>
       
        </React.Fragment>
    );
}
export default BecomeClient;