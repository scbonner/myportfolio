import React from 'react';
import CSS from '../css/index.css';



const About = () => {
    return(

  <div className="container">     
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
      <h1>MY STORY</h1>
      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        {/* <h1>My Story</h1> */}
        <div id="col">
          <p> About four years ago, I had a great opportunity to supervise and mentor a student studying computer science at the university in which I worked. My department had nonprofit status, solely dependent upon outside funding though grants.</p>
          <p>One of my tasks was to maintain and update a statewide collaborative website that included the Juvenile Justice, Mental Health and Substance Use organizations and other non-government agencies. As the collaborative expanded, so did the need to add more pages and subliminal asserts to learn how within a time-sensitive slot of time. My digital capacity was nonexistent other than the normal UI experience.</p>
          <p>I suggested an idea to partner with the university's computer science department. We would utilize the services of a student needing volunteer service hours. I presented it as a win-win effort. Several advantages, money saved, student would receive volunteer service hours including letter of recommendation, and a quicker turnaround in updating the website.</p>
          <p>The group agreed, and I had the chance to supervise and mentor a student. Quickly, I became intrigued with the of the field. He would encourage me to transition over in the field.</p>
          <p>Long story short, his services came to an end. The partnership saved our department somewhere between 5K to 10K dollars, shortened man-hours, student received volunteer hours with a letter of recommendation.</p>
          <p>And, me? Well, I did go back to school for Coding to become a Software Engineer.</p>
        </div>
        </div>
      </div>   
      </div>   
    <div className="container">
        <h1>Fellowships</h1>
        <div className="col-fellow">
        <div>
        <p>2016 Youth Justice Leadership Institute - NJJN (2016/Cohort)</p>
        <ul>
            <li>Alumni Representative - Volunteer</li>
            <li>Alumni Advisory Committee - Volunteer</li>
          </ul> 
        </div>
        <div>
        <p>National Science Foundation - Innovation Corps (2018/Cohort)</p>
        </div>
        </div>
        </div>
        </div>
      
          
     
 
 );
  
}


export default About