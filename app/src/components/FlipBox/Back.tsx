'use client'
import React from 'react';
import styled from 'styled-components';

interface BackBoxProps {
  children: React.ReactElement | React.ReactElement[];
}

const BackBox = styled.div<BackBoxProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #555;
  color: white;
  transform: rotateY(180deg);
`;

interface BackProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Back: React.FC<BackProps> = ({ children }) => {
  return <BackBox>{children}</BackBox>;
};

