import React, { useRef } from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
// import logo from './logo.svg';
import './App.css';
import { Slider } from './components/slider';

const slides = [
  {
    src: img1
  },
  {
    src: img2
  },
  {
    src: img3
  },
  {
    src: img4
  }
]

function App() {

  return (
    <Slider
      items={slides}
    />
  );
}

export default App;
