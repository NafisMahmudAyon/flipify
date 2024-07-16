'use client'
import React from 'react';

interface FrontProps {
  children: React.ReactNode;
}

export const Front: React.FC<FrontProps> = ({ children }) => {
  return <div className='absolute w-full h-full bg-slate-600' style={{ backfaceVisibility: 'hidden' }}>{children}</div>;
};
