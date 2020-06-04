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
          
          <h3>References</h3>
          <ul class="list-group">
            <li class="list-group-item">Bugs Bunny (https://codepen.io/coderakki - cards)</li>
            <li class="list-group-item">Tasmanian Devil (https://github.com/iwilsonq/react-material-landing-page - project page)</li>
            <li class="list-group-item">Yosemite Sam (Link)</li>
            <li class="list-group-item">Tweety Bird (Link)</li>
            <li class="list-group-item">Daffy Duck (Link)</li>
         </ul>
         </div>
          
          <div className="col m6">
          <h3>Project List</h3>
            <div className="stats">
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text darken-1">coders maimed</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text darken-1">fresh pots of coffee</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text lighten-1">pounds gnar shredded</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text darken-1">honeybadgers harmed</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text lighten-1">pounds gnar shredded</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text darken-1">honeybadgers harmed</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text lighten-1">pounds gnar shredded</p> */}
              </div>
              <div className="stat blue darken-2">
                <h2 className="counter white-text">Pending</h2>
                {/* <p className="grey-text darken-1">honeybadgers harmed</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>The Projects List is a work in progress...stay tuned.</p>
        </div>
      </div>
    </section>
  );
};

// https://github.com/iwilsonq/react-material-landing-page


export default Projects;