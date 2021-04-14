import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const element = (
  <Router>
    <App />
  </Router>
);


ReactDOM.render(element, document.getElementById('app'));