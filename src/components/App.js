import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

// App components

import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';



const App = () => {
    return (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Route path="/" component={Home} 
            />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/courses" component={Courses} />
            <Route path="/contact" component={Contact} />
        </div>
    </BrowserRouter>
    )
};


export default App;