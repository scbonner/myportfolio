import React from 'react';
import CSS from '../css/style.css';

const Projects = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col m6">
            <h3>Project Studio</h3>
            <p>Welcome to Project Studio. This is where everything happens. To the immediate right are project ideas birthed, designed and developed by me.</p>
            <p>In addition to, I would like to reference and provide the other developers work (snippets) I used to make parts of my portfolio completed. See below:</p>
          
          <h3>Brief Description of Projects</h3>
          <ul class="list-group">
            <li class="list-group-item">Project 1:</li>
            <li class="list-group-item">Project 2:</li>
            <li class="list-group-item">Project 3:</li>
            <li class="list-group-item">Project 4:</li>
            <li class="list-group-item">Project 5:</li>
            <li class="list-group-item">Project 6:</li>
            <li class="list-group-item">Project :7</li>
            <li class="list-group-item">Project 8:</li>
         </ul>
         </div>
          
          <div className="col m6">
          <h3>Project List</h3>
            <div className="stats">
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 1</h2>
                
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 2</h2>
                
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 3</h2>
                
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 4</h2>
                
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 5</h2>
                </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 6</h2>
                
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 7</h2>
                
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Project 8</h2>
                
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <p>The Projects List is a work in progress...stay tuned.</p>

        </div>
      </div>
     </section>
        
    
   
  )
};



export default Projects;