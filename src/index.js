
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.min.css";
import "../src/assets/scss/global.scss";
import "../src/assets/scss/bootstrap.scss";
import App from './App';
import AuthProvider from './utils/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

// Any Condition where DEBUGGING is NEEDED
var DEBUG = process.env.NODE_ENV === "development";
if (!DEBUG) {
  console.log = () => { };
}


