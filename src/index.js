import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Particles from "react-particles-js";



ReactDOM.render(
 <BrowserRouter>
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
                color:"#DC381B"
              }
              

            }
          }
        }}
        />
   <App />
   </BrowserRouter>,
  document.getElementById('root')
);

