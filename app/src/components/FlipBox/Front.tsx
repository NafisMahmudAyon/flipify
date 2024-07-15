'use client'
import React from 'react';
import styled from 'styled-components';

interface FrontBoxProps {
  children: React.ReactElement | React.ReactElement[];
}

// const FrontBox = styled.div`
const FrontBox = styled.div<FrontBoxProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
`;

interface FrontProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Front: React.FC<FrontProps> = ({ children }) => {
  return <FrontBox>{children}</FrontBox>;
};

