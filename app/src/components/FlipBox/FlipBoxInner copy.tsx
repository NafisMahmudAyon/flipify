'use client'
import React from 'react';
import styled from 'styled-components';

interface FlipBoxInnerProps {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const FlipBoxInnerContainer = styled.div<FlipBoxInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  

  
`;

export const FlipBoxInner: React.FC<FlipBoxInnerProps> = ({ children, direction, className="" }) => {
  return (
    <FlipBoxInnerContainer className={`${className}`} direction={direction}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return child;
        }
        return null;
      })}
    </FlipBoxInnerContainer>
  );
};
