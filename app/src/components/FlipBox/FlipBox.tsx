'use client'
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FlipBoxInner } from './FlipBoxInner';
// import { Front } from './Front';
// import { Back } from './Back';

// Styled components for FlipBox
const FlipBoxContainer = styled.div`
  width: 200px;
  height: 200px;
  perspective: 1000px;
`;

interface FlipBoxProps {
  children: React.ReactElement | React.ReactElement[];
  direction?: 'horizontal' | 'vertical';
}

// const FlipBoxInner = styled.div<FlipBoxProps>`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 0.6s;
//   transform-style: preserve-3d;

//   ${( props ) => props.direction === 'vertical' && `
//     transform: rotateX(0deg);
//   `}
//   ${( props ) => props.direction === 'horizontal' && `
//     transform: rotateY(0deg);
//   `}

//   ${FlipBoxContainer}:hover & {
//     ${( props ) => props.direction === 'vertical' && `
//       transform: rotateX(180deg);
//     `}
//     ${( props ) => props.direction === 'horizontal' && `
//       transform: rotateY(180deg);
//     `}
//   }
// `;

// const FlipBoxInnerBox = styled.div<FlipBoxProps>`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 0.6s;
//   transform-style: preserve-3d;

//   ${({ direction }) => direction === 'vertical' && `
//     transform: rotateX(0deg);
//   `}
//   ${({ direction }) => direction === 'horizontal' && `
//     transform: rotateY(0deg);
//   `}

//   ${FlipBoxContainer}:hover & {
//     ${({ direction }) => direction === 'vertical' && `
//       transform: rotateX(180deg);
//     `}
//     ${({ direction }) => direction === 'horizontal' && `
//       transform: rotateY(180deg);
//     `}
//   }
// `;

// export const FlipBoxInner:React.FC<FlipBoxProps> = ({children, direction})=>{
//   return (<FlipBoxInnerBox direction={direction}>
//     {React.Children.map(children, (child: React.ReactElement) => {
//       if (React.isValidElement(child) && (child.type === Front || child.type === Back)) {
//         return child;
//       }
//       return null;
//     })}
//   </FlipBoxInnerBox>)
// }

export const FlipBox: React.FC<FlipBoxProps> = ({ children, direction = 'horizontal' }) => {
  return (
    <FlipBoxContainer>
      <FlipBoxInner direction={direction}>
        {children}
      </FlipBoxInner>
    </FlipBoxContainer>
  );
};
