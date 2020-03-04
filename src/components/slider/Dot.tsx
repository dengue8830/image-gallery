import * as React from 'react';

export interface DotProps {
  index: number;
  activeIndex: number;
  onClick?: () => void;
}

/**
 * Represents a page in the dots list.
 * A page can be composed by one or more slides.
 */
export function Dot(props: DotProps) {
  return (
    <div
      key={props.index}
      className={"slider__dots__item " + (props.index === props.activeIndex ? "slider__dots__item--active" : "")}
      onClick={props.onClick}
    />
  );
}