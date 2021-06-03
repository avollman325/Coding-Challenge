import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router } from 'react-router-dom';

const element = (

    <App />

);


ReactDOM.render(element, document.getElementById('app'));