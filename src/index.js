import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './view/App';
import { MyAppContextUserInfoProvider } from './Stores/UserInfoContext'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContextUserInfoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyAppContextUserInfoProvider>
);
