'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
const FlipBoxInnerContainer = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  

  
`;
export const FlipBoxInner = ({ children, direction, className = "" }) => {
    return (_jsx(FlipBoxInnerContainer, { className: `${className}`, direction: direction, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return child;
            }
            return null;
        }) }));
};
