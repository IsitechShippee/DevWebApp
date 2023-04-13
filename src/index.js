import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Views/App';
import { MyAppContextUserInfoProvider } from './Stores/UserInfoContext'
import { MyAppContextPopUpProvider } from './Stores/PopUpContext'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContextUserInfoProvider>
    <MyAppContextPopUpProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyAppContextPopUpProvider>
  </MyAppContextUserInfoProvider>
);
