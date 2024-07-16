'use client'
import React from 'react';
import styled from 'styled-components';
import { FlipBoxInner } from './FlipBoxInner';


interface FlipBoxProps {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
}


const FlipBoxContainer = styled.div<FlipBoxProps>`
  width: 200px;
  height: 200px;
  perspective: 1000px;

  &:hover .inner {
    ${({ direction }) => direction === 'vertical' && `
    transform: rotateX(180deg);
  `}
  ${({ direction }) => direction === 'horizontal' && `
    transform: rotateY(180deg);
  `}
  }
`;


export const FlipBox: React.FC<FlipBoxProps> = ({ children, direction = 'horizontal' }) => {
  return (
    <FlipBoxContainer direction={direction}>
      <FlipBoxInner className="inner" direction={direction}>
        {children}
      </FlipBoxInner>
    </FlipBoxContainer>
  );
};
