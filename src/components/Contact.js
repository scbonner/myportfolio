import React, { Component } from 'react';
import CSS from '../css/style.css';



class Contact extends Component {
    constructor() {
      super();
      this.state = {
        firstname: " ",
        lastname: " ",
        email: " "
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
     
      //console.log(event.target.value)
      this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <div className="App">
            <h2>HELLO!</h2>
            <h5>You can reach me via email or icon. If, icon, just click on one of the buttons provided.</h5>
          </div><br></br>
          <div>
            <form>
              <label>First Name:</label>
              <input
                type="text"
                name="title"
                className="title"
                onChange={this.handleChange}
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="second"
                className="title"
                onChange={this.handleChange}
              />
              <label>Email Address:</label>
              <input
                type="text"
                name="email"
                className="title"
                onChange={this.handleChange}
              /><br></br>
              <input type="submit" value="Submit" />
            </form>
            <h2 className="mirrored-text">{this.state.firstname}</h2>
            <br />
            <h2 className="mirrored-text">{this.state.lastname}</h2>
            
          </div>
        </div>
  
      );
    }
  }
  



export default Contact