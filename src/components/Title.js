import React from 'react';
import CSS from '../css/title.css';



  const Title  = () => {
    return (

       <div className="container">
        <h1>P O R T F O L I O</h1>
         <div id="wrap">
           <div id="viewport">
             <div class="tv">
               <div class="screen mute" id="tv">
                 <canvas id="myCanvas" width="300" height="300"></canvas>
               </div>
             </div>
           </div>
         </div>
        <div class="button-view">
            <button href="about" variant="primary" size="lg">ENTER</button>
            {/* <a href="instructors" class="nav-item nav-link">Instructors</a> */}
            </div>
        </div> 
      
    
      );
    }
  
  
  export default Title;