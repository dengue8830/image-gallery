import React, { useRef } from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
// import logo from './logo.svg';
import './App.css';
import { Slider, Slide, Dot, Dots } from './slider';

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
    <div className="app-container">
      <Slider
        items={slides}
      /** Open-closed principle. */
      /** Custom slide component reusing the Slide component. */
      // renderItem={(itemProps) => (
      //   <Slide
      //     key={itemProps.index}
      //     {...itemProps}
      //   />
      // )}
      /** Brand new dots list. */
      // renderDots={(dotsProps) => (
      //   <div>
      //     {
      //       Array.from({ length: dotsProps.count }).map((slide, index) => (
      //         <div style={{ color: dotsProps.activeIndex === index ? 'teal' : '#CCC' }}>x</div>
      //       ))
      //     }
      //   </div>
      // )}
      /** Reusing the Dot component. */
      // renderDots={(dotsProps) => (
      //   <div>
      //     {
      //       Array.from({ length: dotsProps.count }).map((slide, index) => (
      //         <Dot
      //           activeIndex={dotsProps.activeIndex}
      //           key={index}
      //           index={index}
      //           onClick={() => dotsProps.onDotClick && dotsProps.onDotClick(index)}
      //         />
      //       ))
      //     }
      //   </div>
      // )}
      /** Custom dot component reusing the list. */
      // renderDots={(dotsProps) => (
      //   <Dots
      //     {...dotsProps}
      //     renderItem={(itemProps) => (
      //       <div style={{ color: dotsProps.activeIndex === itemProps.index ? 'teal' : '#CCC' }}>x</div>
      //     )}
      //   />
      // )}
      /** Without dots. */
      // renderDots={() => null}
      />
    </div>
  );
}

export default App;
