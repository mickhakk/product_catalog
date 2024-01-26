import React from 'react';
import { IconPaths } from './IconPaths';
import { IconColor } from './IconColor';

interface Props {
  type: keyof typeof IconPaths,
  color: keyof typeof IconColor,
}

export const Icon: React.FC<Props> = ({ type, color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={IconColor[color]}
    >
      <path {...IconPaths[type]} />
    </svg>
  );
};
