import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

