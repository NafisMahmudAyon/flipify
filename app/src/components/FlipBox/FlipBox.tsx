'use client'
import React from 'react';
import { FlipBoxInner } from './FlipBoxInner';

interface FlipBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
}

export const FlipBox: React.FC<FlipBoxProps> = ({ children, direction = 'horizontal' }) => {
  return (
    <div className="w-[200px] h-[200px] outer" style={{ perspective: '1000px' }}>
      <FlipBoxInner direction={direction}>
        {children}
      </FlipBoxInner>
    </div>
  );
};
