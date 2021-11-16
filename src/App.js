import React from 'react';
import './App.css';
import ImageRotatorView from './components/ImageRotatorView/ImageRotatorView';

const App = () => (
  <div className="App">
    <div className="header">
      <h2>Image Rotator</h2>
    </div>
    <main className="main">
      <ImageRotatorView />
    </main>
  </div>
);

export default App;
