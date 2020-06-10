import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';



// App components

import Header from './Header';
import About from './About';
import Projects from './Projects';
import Courses from './Courses';
import Follow from './Follow';
import Contact from './Contact';
import Footer from './Footer';
import Test from './Test';
import NotFound from './NotFound';


const App = () => {
    return (
    <BrowserRouter>
        <div className="container"> 
            <div className= "wrap">
            <Header />
            <Switch>

            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} /> 
            <Route path="/projects" component={Projects} />
            <Route path="/courses" component={Courses} />
            <Route path="/follow" component={Follow} />
            <Route path="/contact" component={Contact} />
            <Route path="/contact" component={Test} />
            <Route path="/notfound" component={NotFound} />
            </Switch>
        </div>
      <Footer />
    
    </div>
   </BrowserRouter>
    ); 
}


export default App