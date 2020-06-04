
import React, { Component } from 'react';
import CSS from '../css/index.css';


class Header extends Component {
    render() {
        return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
    <div class="container-fluid">
        <a href="strance" class="navbar-brand mr-3">Sadric Bonner</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ml-auto">
            {/* <div class="navbar-nav ml-auto"> */}
                {/* <a href="home" class="nav-item nav-link active">Home</a> */}
                
                <a href="about" class="nav-item nav-link">About</a>
                <a href="projects" class="nav-item nav-link">Projects</a>
                <a href="courses" class="nav-item nav-link">Courses</a>
                <a href="inform" class="nav-item nav-link">InForm</a>
                <a href="contact" class="nav-item nav-link">Contact</a>
            </div>
            </div>
            {/* <div class="navbar-nav ml-auto">
                <a href="register" class="nav-item nav-link">Register</a>
                <a href="login" class="nav-item nav-link">Login</a>
            </div> */}
        </div>    
</nav>  
            );
        }
     }
              
   
 
//  export default Test;

   
 
export default Header;