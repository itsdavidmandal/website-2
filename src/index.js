import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from "@emailjs/browser";

emailjs.init('Z6XLHFVq8GAu43CFz');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

