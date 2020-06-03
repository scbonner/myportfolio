// import React, { Component } from 'react';
// import CSS from '../css/style.css';



// //Form component
// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email:''
//     };

//     this.handleChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
    
//     this.setState({
//       [name]: value
//     });
//     console.log('Change detected. State updated' + name + ' = ' + value);
//   }

//   handleSubmit(event) {
//     alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} >
//           <div className="form-group">
//             <label for="nameImput">Name</label>
//             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Name" />
//           </div>
//           <div className="form-group">
//             <label for="emailImput">Name</label>
//             <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
//           </div>
//           <input type="submit" value="Submit" className="btn btn-primary" />
//         </form>
//       </div>
//     )
//   }
// }

// class MainTitle extends React.Component {
//   render(){
//     return(
//       <h1>React Form example</h1>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <MainTitle/>
//         <Test/>
//       </div>
//     )
//   }
// }

// React.render(<App/>, document.getElementById('app'))

// export default Test;
