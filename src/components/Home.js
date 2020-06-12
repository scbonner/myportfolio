import React, { Component } from 'react';
import CSS from '../css/index.css';


class Home extends Component {
    render() {
        return (

            <div className="container">
                <h1>COMPLETED COURSES</h1>
                    <div className="card">
                        <h2>HTML5</h2></div>
                    <div className="card">
                        <h2>CSS3</h2></div>
                    <div className="card">
                        <h2>RUBY</h2>
                    </div><div className="card">
                        <h2>JAVASCRIPT</h2></div>
                    <div className="container">
                    <div className="card">
                        <h2>REACT</h2></div>
                    <div className="card">
                        <h2>API</h2></div>
                    <div className="card">
                        <h2>JSX</h2></div>
                        <div className="card">
                        <h2>AJAX</h2></div>
                    <div className="card">
                        <h2>PENDING</h2></div>
                    <div className="card">
                        <h2>PENDING</h2></div>
                    <div className="card">
                        <h2>PENDING</h2></div>
                </div>
            </div>

   

        )
    }
}
              
   
 
  export default Home;