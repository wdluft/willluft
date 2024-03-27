import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);
