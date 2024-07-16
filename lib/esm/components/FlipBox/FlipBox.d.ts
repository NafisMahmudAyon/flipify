import React from 'react';
interface FlipBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement | React.ReactElement[];
    direction?: 'horizontal' | 'vertical';
}
export declare const FlipBox: React.FC<FlipBoxProps>;
export {};
