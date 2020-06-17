
import React from 'react';
import Photo from '../image/update.jpg';
import CSS from '../css/index.css';

const Home = () => {
    return (

      <div className="home-pic">
        <img className="home-img" src = {Photo} alt="profile pic"></img>
        <div className="text">
          <p>Hi. I'm Sadric, pronounced as (Say-drick).However, most people get it confused with Cedric, and that's okay. </p>
          <p>I am a life-learner and creative at designing knitting, crocheting, painting, dance, and now web applications. As you take time to view my portfolio you will have the opportunity to see how diverse and professional my work is.</p>
          <p>The backdrop in designing the portifolio, was to keep it simple, Sadric (KISS) and focus on "My Story" here and the "Projects" pages. So continue to move forward and view the rest I have to offer.</p>
          <p>In summary, if you are interested to talk further, fill out the contact form I have provided for you to enter your information.</p>
          
        </div>
      </div>
      
    )
 }
     
      
  
  
    

export default Home

