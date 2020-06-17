
import React from 'react';
import Photo from '../image/update.jpg';
import CSS from '../css/index.css';

const Home = () => {
    return (

      <div className="home-pic">
        <img className="home-img" src = {Photo} alt="profile pic"></img>
        <div className="text">
          <p>Hi. I'm Sadric, pronounced as (Say-drick).However, most people get it confused with Cedric, and that's okay. </p>
          <p>I consider myself a life-learner, and very creative at designing knitting, crocheting, painting, dance and so forth. As you continue to view my portfolio you will get to see the professional and digital side of my creativity.  </p>
          <p>The backdrop in designing this portifolio, was to keep it's design simple and focus on "My Story" and "Projects" developed. So continue to move forward and view the rest of the file. And if you would like to contact me, a form is provided for you to enter your information.</p>
        </div>
      </div>
      
    )
 }
     
      
  
  
    

export default Home

