import React from 'react';
import { iconPaths } from './IconPaths';
import { IconColor } from './IconColor';

interface Props {
  type: 'ArrowLeft' | 'ArrowRight' | 'BurgerMenu' | 'Close' |
  'ArrowUp' | 'ArrowDown' | 'Plus' | 'Minus' | 'Home' | 'Search' |
  'Heart' | 'HeartFilled' | 'Cart',
  color: keyof typeof IconColor,
}

export const Icon: React.FC<Props> = ({ type, color }) => {
  const { clipRule, fillRule, d } = iconPaths[type];

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={IconColor[color]}
    >
      <path clipRule={clipRule} fillRule={fillRule} d={d} />
    </svg>
  );
};
