import React from 'react';
// import { Link } from 'react-router-dom';
// import Mainpage from './Mainpage';
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Mainpage from './css/mainpage.css';



  const Mainpage = () => {
    return (

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
            <div class="button-view">
            <a href="home.html" class="btn btn-clear 5em">VIEW</a> 
            </div>
        </div>
      
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
  
  
  export default Mainpage;