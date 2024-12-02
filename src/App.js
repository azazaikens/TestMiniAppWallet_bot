import React, { useState } from 'react';
import './App.css';

const tg = window.Telegram.WebApp


function App() {
  const onClose = () => {
    tg.Close()
  }
 
  return (
    <>
      <button onClick={onClose}>Close</button>
    </>
  )
}


export default App;
