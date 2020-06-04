import React from 'react';
import CSS from '../css/index.css';


const Test = () => {
    return(
        <div className="test">
            <div class="some-page-wrapper">
                <div class="row">
                    {/* <div class="blue-column"> */}
                        Insert paragraphs
                    </div>
                </div>
                <div class="column">
                    Second paragraph
                </div>
            </div>
        
    )
}



// import React, { Component } from 'react';
// import CSS from '../css/index.css';

// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''

//         };
//         this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }
// handleChange(event) {
//     this.setState({value: event.target.value});

// }
// render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name:
//                 <input
//                 type="text"
//                 value={this.state.value} 
                
//             />
//             </label>
//         </form>
//     );
//   }
// }
       









// import React, { Component } from 'react';
// import CSS from '../css/index.css';


// class Test extends Component {
//     render() {
//         return (
//     <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
//     <div class="container-fluid">
//         <a href="strance" class="navbar-brand mr-3">Sadric Bonner</a>
//         <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <div class="navbar-nav ml-auto">
//             {/* <div class="navbar-nav ml-auto"> */}
//                 {/* <a href="home" class="nav-item nav-link active">Home</a> */}
                
//                 <a href="about" class="nav-item nav-link">About</a>
//                 <a href="projects" class="nav-item nav-link">Projects</a>
//                 <a href="courses" class="nav-item nav-link">Courses</a>
//                 <a href="contact" class="nav-item nav-link">Contact</a>
//             </div>
//             </div>
            
//         </div>    
// </nav>  
//             );
//         }
//      }
              
   
 

// HEADER FILE Input


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import CSS from '../css/index.css';


// const Header = () => {
//     return( 
//     <header>
    
//         <span className="icn-logo"><i className="material-icons">Sadric Bonner</i></span>
        
//             <ul className="main-nav">
//                 <li><NavLink exact to="/">Home</NavLink></li>
//                 <li><NavLink exact to="/about">About</NavLink></li>
//                 <li><NavLink exact to="/projects">Projects</NavLink></li>
//                 <li><NavLink exact to="/courses/html">Courses</NavLink></li>
//                 <li><NavLink exact to="/contact">Contact</NavLink></li>
//                 <li><NavLink exact to="/test">Test</NavLink></li>
                
//             </ul>
//     </header>

 export default Test;
  