import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import AlertContent from './components/AlertContent/AlertContent';
import ContentCards from './components/ContentCards/ContentCards';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <AlertContent />
    <ContentCards />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
