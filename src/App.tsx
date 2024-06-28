import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Auth from './components/pages/Auth';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage></MainPage>
      {/* <Auth></Auth> */}
    </div>
  );
}

export default App;
