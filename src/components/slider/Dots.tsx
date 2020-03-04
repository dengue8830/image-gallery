import * as React from 'react';
import { Dot } from './Dot';

interface Props {
  count: number;
  activeIndex: number;
}

export function Dots(props: Props) {
  return (
    <div className="slider__dots">
      {
        Array.from({ length: props.count }).map((slide, index) => (
          <Dot
            key={index}
            index={index}
            activeIndex={props.activeIndex}
          />
        ))
      }
    </div>
  );
}