import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TopHeader from './Components/TopHeader';
import Routing from './Features/Routing';

function App() {
  return (
    <div className="">
      <div className="container ml-auto mr-auto">
        <TopHeader />
      </div>
      <Header />
      <div className="container ml-auto mr-auto">
        <Routing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
