import * as React from 'react';
import { Dot, DotProps } from './Dot';
import './Dots.css';

export interface DotsProps {
  count: number;
  activeIndex: number;
  onDotClick?: (index) => void;
  renderItem?: (props: DotProps) => React.ReactElement | null;
}

/**
 * Container for dots list.
 */
export function Dots(props: DotsProps) {
  function renderItem(itemProps: DotProps) {
    if (props.renderItem) {
      return props.renderItem(itemProps);
    }
    return (
      <Dot
        {...itemProps}
      />
    )
  }

  return (
    <div className="slider__dots">
      {
        Array.from({ length: props.count }).map((slide, index) => (
          renderItem({
            activeIndex: props.activeIndex,
            index,
            onClick: () => props.onDotClick && props.onDotClick(index)
          })
        ))
      }
    </div>
  );
}