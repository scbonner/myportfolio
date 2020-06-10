import React, { Component } from 'react';
import CSS from '../css/index.css';

const About = () => {
    return(

  <div className="container">     
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <h1>My Story</h1>
        <div id="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
        </div>
      </div>      
    </div>
    <div className="container">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10, margin: 30 }}>
        <div>Fellowships</div>
          <ul>
            <li>National Science Foundation</li>
            <li>Youth Justice Leadership Institute</li>
            <li></li>
          </ul>
        <div>Column 2</div>
        
        </div>
    </div> 
  </div>
   
 
 );
  
}


export default About