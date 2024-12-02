import React, { useState } from 'react';
import './App.css';
// import connectWallet from './component/connectWallet';

const tg = window.Telegram.WebApp


function App() {
  const onClose = () => {
    tg.Close()
  }
 
  return (
    <>
      <button onClick={onClose}>Close</button>
      {/* <button onClick={connectWallet}>Connect</button> */}
    </>
  )
}


export default App;
