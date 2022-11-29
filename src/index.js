import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

import { CartProvider } from './components/Context/Cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-iz3t70sf48h38myh.us.auth0.com"
  clientId="XpDIFpCsn7D1Zmoq9sQ97HcKET7ZJ7pE"
  redirectUri={window.location.origin}>
    <React.StrictMode>
      <CartProvider>
          <App />
      </CartProvider>
    </React.StrictMode>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
