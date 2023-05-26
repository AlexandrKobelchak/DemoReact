import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from './components/app-component';
import reportWebVitals from './reportWebVitals';
import {ClientTagService} from "./components/_services/ClientTagService";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <AppComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
