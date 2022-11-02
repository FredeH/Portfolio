import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  /*
<BrowserRouter>
  <App />
</BrowserRouter>,
*/
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>,
  </React.StrictMode>
);