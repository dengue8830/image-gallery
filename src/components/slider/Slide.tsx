import * as React from 'react';
import { SlideModel } from './Slider';
import './Slide.css';

export interface SlideProps {
  index: number;
  activeIndex: number;
  toTheRight: boolean;
  slide: SlideModel
}

/** Represent an item in the slider. */
export function Slide(props: SlideProps) {
  return (
    <div
      className={"slider__list__item " + (props.index === props.activeIndex ? "slider__list__item--active " : "") + (props.toTheRight ? 'slide-in-left' : 'slide-in-right')}
    >
      <img
        src={props.slide.src}
        loading="lazy"
        className="slider__list__item__img"
      />
    </div>
  );
}