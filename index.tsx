
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import logo from './img/logo_highhell_transparente.png'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<img src={logo} alt="Logo" />