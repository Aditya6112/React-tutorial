import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './chai';
const root = ReactDOM.createRoot(document.getElementById('root')); //this root is taken from index.html file from public folder
root.render(
    <>
      <App />
      <h1>This is a h1 tag</h1>
      <Chai/>
    </>
  
);
