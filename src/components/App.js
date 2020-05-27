import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

// App components
import Home from './Home';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Route path="/" component={Home} 
            />
        </div>
    </BrowserRouter>
);

export default App;