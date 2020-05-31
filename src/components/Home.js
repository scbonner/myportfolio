import React from 'react';
// import { Link } from 'react-router-dom';
import Home from '../css/home.css';



  const Home = () => {
      return (
        // <section>
        // <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3 fixed-top">
        //    <div class="container-fluid">
        //      <div class="collapse navbar-collapse" id="navbarCollapse">
        //        <div class="navbar-nav">
        //          <a href="sadic-bonner.html" class="nav-item nav-link active">Sadric Bonner</a>
        //          <a href="projects.html" class="nav-item nav-link active">Projects</a>
        //          <a href="about.html" class="nav-item nav-link active">About</a>
        //          <a href="contact.html" class="nav-item nav-link active">Contact</a>
        //      </div>
        //      <div class="navbar-nav ml-auto">
        //          <a href="signup.html" class="nav-item nav-link">Sign In</a>
                         
        //              </div>
        //          </div>
        //      </div>    
        //  </nav>
       <div className="container">
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
        </div>
      //  </section>

        // <div className="main-content home">
        //   <h2>Front End Course Directory</h2>
        //   <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        //   <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        //   <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        //   <hr />
        //   <h3>Featured Projects</h3>
        //   <form onSubmit={this.handleSubmit}>
        //     <input type="text" placeholder="Title" ref={ (input) => this.title = input } />
        //     <input type="text" placeholder="Description" ref={ (input) => this.description = input }/>
        //     <button type="submit">Go!</button>
        //   </form>
        //   {/* <Link to="projects/HTML/Tommy">Tommy Wingo</Link> */}
          
        // </div>
      );
    }
  
  
  export default Home;