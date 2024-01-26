import React from 'react';
import { IconPaths } from './IconPaths';

interface Props {
  iconType: keyof typeof IconPaths,
  color: string,
}

export const Icon: React.FC<Props> = ({ iconType, color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path {...IconPaths[iconType]} />
    </svg>
  );
};
