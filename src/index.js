import React from 'react';
// import "./AssetsMain/Css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import "./AssetsMain/Css/fontawesome-all.css";
// import "./AssetsMain/Css/themify-icons.css";
import "./AssetsMain/Css/plugins.css";
import "./AssetsMain/Css/animate.css";
// import "./AssetsMain/Css/owl.carosel.css";
// import "./AssetsMain/Css/rev-settings.css";
import "./AssetsMain/Css/styles-5.css";
// import "./AssetsMain/Css/styles-5.css id='main-styles'";
import "./AssetsMain/Css/style.css";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
