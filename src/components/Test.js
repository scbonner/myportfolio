import React, { Component } from 'react';
import CSS from '../css/style.css';


// class Test extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  
 
  

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: " ",
      lastname: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
   
    //console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="App">
          <h2>Hello CodeSandbox</h2>
          <h2>June 3rd Practice!</h2>
        </div>
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
          </form>
          <h2 className="mirrored-text">{this.state.title}</h2>
          <br />
          <h2 className="mirrored-text">{this.state.second}</h2>
        </div>
      </div>

    );
    }
}
export default Test;


   