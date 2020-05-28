import React from 'react';
import Landing from './components/Landing';
import Landing.css from './components/Landing';



const Hero = () => {
    return (
      <section>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3 fixed-top">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <a href="sadic-bonner.html" class="nav-item nav-link active">Sadric Bonner</a>
                <a href="projects.html" class="nav-item nav-link active">Projects</a>
                <a href="about.html" class="nav-item nav-link active">About</a>
                <a href="contact.html" class="nav-item nav-link active">Contact</a>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="signup.html" class="nav-item nav-link">Sign In</a>
                        
                    </div>
                </div>
            </div>    
        </nav>
      <h1>P O R T F O L I O</h1>
 
        <div id="wrap">
          <div id="viewport">
            <div class="tv">
              <div class="screen mute" id="tv">
                <canvas id="myCanvas" width="400" height="400"></canvas>
              </div>
            </div>
          </div>
        </div>   
        <div class="button">
        <a href="home.html" class="btn btn-clear 5em">VIEW</a> 
        </div>
      </section>

    )
  
      
}




export default Landing;