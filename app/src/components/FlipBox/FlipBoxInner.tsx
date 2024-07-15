
'use client'
import React from 'react';
import styled from 'styled-components';
import { Front } from './Front';
import { Back } from './Back';

interface FlipBoxProps {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
}
const FlipBoxInnerBox = styled.div<FlipBoxProps>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${({ direction }) => direction === 'vertical' && `
    transform: rotateX(0deg);
  `}
  ${({ direction }) => direction === 'horizontal' && `
    transform: rotateY(0deg);
  `}

  
`;


export const FlipBoxInner: React.FC<FlipBoxProps> = ({ children, direction }) => {
  return (<FlipBoxInnerBox direction={direction}>
    {React.Children.map(children, (child: React.ReactElement) => {
      if (React.isValidElement(child) && (child.type === Front || child.type === Back)) {
        return child;
      }
      return null;
    })}
  </FlipBoxInnerBox>)
}