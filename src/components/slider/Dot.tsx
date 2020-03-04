import * as React from 'react';

interface Props {
  index: number;
  activeIndex: number;
}

export function Dot(props: Props) {
  return (
    <div
      key={props.index}
      className={"slider__dots__item " + (props.index === props.activeIndex ? "slider__dots__item--active" : "")}
    />
  );
}