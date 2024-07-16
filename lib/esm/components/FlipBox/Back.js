'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const Back = ({ children }) => {
    return _jsx("div", { className: 'absolute w-full h-full bg-slate-800', style: { backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }, children: children });
};
