import React, { Component } from 'react';
import { FontAwesomeIcon } from 'react-icons/fa';
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
    )
}
}
class Facebook extends Component {
    render() {
        return (
            <Facebook icon={['fal', 'code']} size="3x" />

        )
    }
}



  

export default Test;


   