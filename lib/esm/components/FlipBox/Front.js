'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const Front = ({ children }) => {
    return _jsx("div", { className: 'absolute w-full h-full bg-slate-600', style: { backfaceVisibility: 'hidden' }, children: children });
};
