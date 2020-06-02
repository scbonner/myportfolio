import React from 'react';
import CSS from '../css/title.css';



  const Title = () => {
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
            <button href="home" variant="primary" size="lg">ENTER</button>
            </div>
        </div>
      
        //   <h3>Featured Projects</h3>
        //   <form onSubmit={this.handleSubmit}>
        //     <input type="text" placeholder="Title" ref={ (input) => this.title = input } />
        //     <input type="text" placeholder="Description" ref={ (input) => this.description = input }/>
        //     <button type="submit">Go!</button>
        //   </form>
        //  <Link to="projects/HTML/Tommy">Tommy Wingo</Link>
          
        // // </div>
      );
    }
  
  
  export default Title;