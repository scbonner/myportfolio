import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

// App components

import Header from './Header';
import Title from './Title';
// import Landing2 from './Landing2';
// import Landing1 from './Landing1';
import About from './About';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';
import CSS from '../css/title.css'
import NotFound from './NotFound';
import Featured from './Featured';


const App = () => {
    return (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
            <Route path="/" component={Title} 
            />
            <Route path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:description:title" component={Featured} />
            <Route path="/courses" component={Courses} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
    )
};


export default App;