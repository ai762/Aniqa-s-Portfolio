import React from "react";
import emailjs from "emailjs-com";




const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_80ldt22', 'template_hncg8th', e.target, 'user_pZXbkKEG7tarn3NRXZEXm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    function showAlert(){
        const message = "Hi! Thanks to show interest. You will receive response from us very soon. Stay Tuned...";
        alert (message);

    }
    
    return(
        <React.Fragment>
            <div className = "contact-div">
                <div className = "inner-contact-div">
                <div className = "inner-services-div">
            <h1 className = "contact-h1">GET IN TOUCH</h1>
            <hr /> 
            </div>
            <form onSubmit = {sendEmail}>  
            <input type = "text" id = "inputField" placeholder="YOUR NAME *" name = "name" /><br />
            <input type = "text" id = "inputField" placeholder="YOUR EMAIL *"  name = "email"/><br />
            <input type = "textarea" id = "textarea" placeholder="YOUR MESSAGE *" name = "message"/><br />
            <input type = "submit" id = "submitBtn" value = "SUBMIT" onClick = {showAlert}/>
            </form>      
            </div>
            </div>
            
        </React.Fragment>
    );
}

export default Contact;