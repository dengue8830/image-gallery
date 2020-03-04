import * as React from 'react';
import { Dot } from './Dot';

interface Props {
  count: number;
  activeIndex: number;
  onDotClick?: (index) => void;
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
            onClick={() => props.onDotClick && props.onDotClick(index)}
          />
        ))
      }
    </div>
  );
}