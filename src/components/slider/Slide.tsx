import * as React from 'react';
import { SlideModel } from './Slider';

export interface SlideProps {
  index: number;
  activeIndex: number;
  toTheRight: boolean;
  slide: SlideModel
}

export function Slide(props: SlideProps) {
  return (
    <div
      className={"slider__list__item " + (props.index === props.activeIndex ? "slider__list__item--active " : "") + (props.toTheRight ? 'slide-in-left' : 'slide-in-right')}
    >
      <img src={props.slide.src} loading="lazy" />
    </div>
  );
}