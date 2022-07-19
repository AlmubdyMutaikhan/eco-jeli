import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

const uris = ['https://bee-volunteers-backend.herokuapp.com', 'http://localhost:3001']
axios.defaults.baseURL = uris[1];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

