'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { FlipBoxInner } from './FlipBoxInner';
const FlipBoxContainer = styled.div `
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
export const FlipBox = ({ children, direction = 'horizontal' }) => {
    return (_jsx(FlipBoxContainer, { direction: direction, children: _jsx(FlipBoxInner, { className: "inner", direction: direction, children: children }) }));
};
