// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import CSS from '../css/courses.css';



// const NavLinks = [
//   { url: '/', name: 'Home' },
//   { url: '/about', name: 'About' },
//   { url: '/projects', name: 'Projects' },
//   { url: '/contact', name: 'Contact' },
// ];


// class Test extends Component {
//   constructor(){
//     super();
//     this.state = {
//       style: 'menu',
//       menuStatus: 'open'

//     };
//     this.handleClick = this.handleClick.bind(this);

//   };

//   handleClick() {
//     switch(this.state.menuStatus)
//     {
//       case "open":
//         this.setState({
//           menuStatus: "close",
//           style: "menu active"
//         });
//         break;
//       case "close":
//         this.setState({
//           menuStatus:"open",
//           style: "menu"
//         });
//         break;

//     }
//   }

//   render() {
//     return(
//       <div>
//         <button onClick={this.handleClick}>Sadric's Portfolio</button>
//         <div className={this.state.style}>
//         <ul>
//           {NavLinks.map(({ url, name }) => ( 
//           <li>
//             <a href={url}>{name}></a>
//           </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//     );
//   }

// }

//  export default Test