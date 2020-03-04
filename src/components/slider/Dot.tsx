import * as React from 'react';

export interface DotProps {
  index: number;
  activeIndex: number;
  onClick?: () => void;
}

export function Dot(props: DotProps) {
  return (
    <div
      key={props.index}
      className={"slider__dots__item " + (props.index === props.activeIndex ? "slider__dots__item--active" : "")}
      onClick={props.onClick}
    />
  );
}