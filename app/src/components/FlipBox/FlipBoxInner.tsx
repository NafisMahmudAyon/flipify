'use client'
import React from 'react';

interface FlipBoxInnerProps {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
  hover?: boolean;
}

export const FlipBoxInner: React.FC<FlipBoxInnerProps> = ({ children, direction = 'horizontal' }) => {
  return (
    <div className={`inner relative w-full h-full text-center transition-all duration-500 ${direction === "horizontal" ? "horizontal" : "vertical"}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return child;
        }
        return null;
      })}
    </div>
  );
};
