import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App" style = {{maxHeight : "100%" , maxWidth : "100%"}}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
