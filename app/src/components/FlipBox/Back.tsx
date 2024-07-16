'use client'
import React from 'react';

interface BackProps {
  children: React.ReactNode;
}

export const Back: React.FC<BackProps> = ({ children }) => {
  return <div className='absolute w-full h-full bg-slate-800' style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>{children}</div>;
};
