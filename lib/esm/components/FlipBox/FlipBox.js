'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { FlipBoxInner } from './FlipBoxInner';
export const FlipBox = ({ children, direction = 'horizontal' }) => {
    return (_jsx("div", { className: "w-[200px] h-[200px] outer", style: { perspective: '1000px' }, children: _jsx(FlipBoxInner, { direction: direction, children: children }) }));
};
