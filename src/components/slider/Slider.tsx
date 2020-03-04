import * as React from 'react';
import { Slide, SlideProps } from './Slide';
import { Dots, DotsProps } from './Dots';

interface Props {
  items: SlideModel[];
  renderItem?: (props: SlideProps) => React.ReactElement;
  renderDots?: (props: DotsProps) => React.ReactElement | null;
}

export interface SlideModel {
  src: string;
}

const LONG_SCROLL_DURATION_IN_MILLS = 1000;

export function Slider(props: Props) {
  // Current visible slide.
  const [activeIndex, setActiveIndex] = React.useState(0);
  // Used to know if the fade animation should be to the right or left.
  const [movedToTheRight, setMovedToTheRight] = React.useState(false);
  // Used as a time window to avoid too much fired events on long scroll.
  let timeoutId = React.useRef<NodeJS.Timeout | undefined>(undefined);

  /**
   * Calculate wich one will be the next active index based on the
   * horizontal scroll behaviour.
   */
  function onScroll(event: React.WheelEvent<HTMLDivElement>) {
    const isVerticalScroll = event.deltaY !== 0;
    if (isVerticalScroll) {
      return;
    }
    /** Long scrolling movements fires the event a lot of times, we just need one event fired. */
    const isWaitingForLongScroll = !!timeoutId.current;
    if (isWaitingForLongScroll) {
      return;
    }
    const _movedToTheRight = event.deltaX < 0;
    if (_movedToTheRight) {
      const isTheLast = activeIndex === props.items.length - 1;
      if (isTheLast) {
        return;
      }
      setActiveIndex(activeIndex + 1);
      setMovedToTheRight(true);
    } else { // moved to the left
      const isTheFirst = activeIndex === 0;
      if (isTheFirst) {
        return;
      }
      setActiveIndex(activeIndex - 1);
      setMovedToTheRight(false);
    }
    timeoutId.current = setTimeout(() => {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = undefined;
    }, LONG_SCROLL_DURATION_IN_MILLS);
  }

  /**
   * Calculate wich one will be the next active index based on the
   * horizontal drag behaviour.
   */
  function onDrag(event: React.DragEvent<HTMLDivElement>) {
    // console.log('dragging', event.pageX);
    // TODO: Not implemented yet.
  }

  function onDotClick(index) {
    setActiveIndex(index);
  }

  function renderItem(itemProps: SlideProps) {
    if (props.renderItem) {
      return props.renderItem(itemProps);
    }
    return (
      <Slide
        key={itemProps.index}
        {...itemProps}
      />
    );
  }

  function renderDots(dotsProps: DotsProps) {
    if (props.renderDots) {
      return props.renderDots(dotsProps);
    }
    return (
      <Dots
        {...dotsProps}
      />
    )
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
          props.items.map((slide, index) => renderItem({
            // Default props.
            slide,
            index,
            toTheRight: movedToTheRight,
            activeIndex
          }))
        }
      </div>
      {
        renderDots({
          // Default props.
          activeIndex,
          onDotClick,
          count: props.items.length
        })
      }
    </div>
  );
}