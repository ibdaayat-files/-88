
import React from 'react';

interface KeyProps {
  label: string;
}

export const Key: React.FC<KeyProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center justify-center px-2 py-1 min-w-[32px] bg-slate-100 text-slate-900 rounded-md font-bold text-sm key-cap border-b-2 border-slate-400 mx-0.5 select-none">
      {label}
    </span>
  );
};
