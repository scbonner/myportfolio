import React, { Component } from 'react';
import CSS from '../css/style.css';


class Contact  extends Component {
  constructor() {
    super();
    this.state = {
      firstname: " ",
      lastname: " ",
      email: " ",
      phone: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  
    this.setState({ [event.target.firstname]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="Contact">
          <h2>Provide Contact Information</h2>
          {/* <h2>June 3rd Practice!</h2> */}
        </div><br></br>
        <div>
          <form>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              className="title"
              onChange={this.handleChange}
            />
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              className="title"
              onChange={this.handleChange}
            /><br></br>
            <br></br>
            <label>Email Address:</label>
            <input
              type="text"
              name="email"
              className="title"
              onChange={this.handleChange}
            />
            <label>Phone Number:</label>
            <input
              type="number"
              name="phonenumber"
              className="title"
              onChange={this.handleChange}
            />
          </form>
          <h1 className="text">{this.state.firstname}</h1>
          <br />
          <h1 className="text">{this.state.lastname}</h1>
        </div>
      </div>
    );
  }


export default Contact

