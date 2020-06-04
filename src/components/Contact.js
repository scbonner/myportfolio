// import React, { Component } from 'react';
// import CSS from '../css/style.css';



// class Contact extends Component {
//     constructor() {
//       super();
//       this.state = {
//         name: " ",
//         email: " "
//       };
//       this.handleChange = this.handleInputChange.bind(this);
//     }
  
//     handleChange(event) {
//       // console.log("text");
//       // event.target.value
//       //console.log(event.target.value)
//       this.setState({ [event.target.name]: event.target.value });
//     }
  
//     render() {
//       return (
//         <div>
//           <div className="contact">
//             <h2>June 3rd Practice!</h2>
//           </div>
//           <div>
//             <form>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="title"
//                 className="title"
//                 onChange={this.handleChange}
//               />
//               <label>Second:</label>
//               <input
//                 type="text"
//                 name="second"
//                 className="title"
//                 onChange={this.handleChange}
//               />
//             </form>
//             <h1 className="mirrored-text">{this.state.title}</h1>
//             <br />
//             <h1 className="mirrored-text">{this.state.second}</h1>
//           </div>
//         </div>
//       );
//     }
//   }
  



// export default Contact;