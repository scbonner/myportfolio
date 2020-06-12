import React from 'react';
import { NavLink } from 'react';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';



// App components

import Home from './Home';
// import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './NotFound';
// import Test from './Test';


const App = () => {
    return (

    <BrowserRouter>
            <Home />
            <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} /> 
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/notfound" component={NotFound} />
            </Switch>
    
      <Footer />
      </BrowserRouter>

        )
    }

export default App


