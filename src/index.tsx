import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/main';
import Header from 'components/header';
import Footer from 'components/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
      <Main />
    <Footer />
  </React.StrictMode>
);