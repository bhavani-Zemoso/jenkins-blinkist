import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8jqgrb-t.us.auth0.com"
      clientId="9qCpxtxNQvzxFDul1jtqgr0tP6GehsIv"
      redirectUri={window.location.origin}>
       <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Auth0Provider>
  </React.StrictMode>
);
