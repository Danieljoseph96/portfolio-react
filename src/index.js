import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './themes/global.css';
import './themes/blue.css';
import './themes/red.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
