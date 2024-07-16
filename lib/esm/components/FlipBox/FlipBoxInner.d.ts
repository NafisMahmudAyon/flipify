import React from 'react';
interface FlipBoxInnerProps {
    children: React.ReactElement | React.ReactElement[];
    direction?: 'horizontal' | 'vertical';
    className?: string;
    hover?: boolean;
}
export declare const FlipBoxInner: React.FC<FlipBoxInnerProps>;
export {};
