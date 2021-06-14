import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Particles from "react-particles-js";
import MessengerCustomerChat from 'react-messenger-customer-chat';


ReactDOM.render(
 <BrowserRouter>
 <MessengerCustomerChat
    pageId="113178580437674"
    appId="1192414871206322"
  />,
 <Particles 
        params = {{
          particles:{
            number:{
              value:30,
              density:{
                enable: true,
                value_area:900
              }
            },
            shape:{
              type:"square",
              stroke: {
                width:6,
                color:"#1da099"
              }
              

            }
          }
        }}
        />
   <App />
   </BrowserRouter>,
  document.getElementById('root')
);

