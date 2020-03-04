import * as React from 'react';
import { Slide } from './Slide';
import { Dots } from './Dots';

interface Props {
  items: SlideModel[];
}

export interface SlideModel {
  src: string;
}

let timeoutId;
const LONG_SCROLL_DURATION_IN_MILLS = 1000;

export function Slider(props: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [toTheRight, setToTheRight] = React.useState(false);

  function onScroll(event: React.WheelEvent<HTMLDivElement>) {
    const isVerticalScroll = event.deltaY !== 0;
    if (isVerticalScroll) {
      return;
    }
    const isWaitingForLongScroll = !!timeoutId;
    if (isWaitingForLongScroll) {
      return;
    }
    const movedToTheRight = event.deltaX < 0;
    // console.log(movedToTheRight ? 'right' : 'left');
    if (movedToTheRight) {
      const isTheLast = activeIndex === props.items.length - 1;
      if (isTheLast) {
        return;
      }
      setActiveIndex(activeIndex + 1);
      setToTheRight(true);
    } else {
      const isTheFirst = activeIndex === 0;
      if (isTheFirst) {
        return;
      }
      setActiveIndex(activeIndex - 1);
      setToTheRight(false);
    }
    timeoutId = setTimeout(() => {
      timeoutId && clearTimeout(timeoutId);
      timeoutId = undefined;
    }, LONG_SCROLL_DURATION_IN_MILLS);
  }

  function onDrag(event: React.DragEvent<HTMLDivElement>) {
    // console.log('dragging', event.pageX);
    // TODO: Not implemented yet.
  }

  function onDotClick(index) {
    setActiveIndex(index);
  }

  return (
    <div
      className="slider"
      onWheel={onScroll}
      onDrag={onDrag}
    >
      <div
        className="slider__list"
      >
        {
          props.items.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              slide={slide}
              activeIndex={activeIndex}
              toTheRight={toTheRight}
            />
          ))
        }
      </div>
      <Dots
        count={props.items.length}
        activeIndex={activeIndex}
        onDotClick={onDotClick}
      />
    </div>
  );
}