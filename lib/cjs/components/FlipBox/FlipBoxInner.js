'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const FlipBoxInner = ({ children, direction = 'horizontal' }) => {
    return (_jsx("div", { className: `inner relative w-full h-full text-center transition-all duration-500 ${direction === "horizontal" ? "horizontal" : "vertical"}`, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return child;
            }
            return null;
        }) }));
};
