import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App nomes={['Usuario 1', 'Usuario 2', 'Usuario 3']} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
