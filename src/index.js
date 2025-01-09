import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from "react-dom"

ReactGA.initialize("G-PRX3ECQJ26");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
