import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body'

function App() {
  return (
    <div className="App" style = {{maxHeight : "100%" , maxWidth : "100%"}}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
