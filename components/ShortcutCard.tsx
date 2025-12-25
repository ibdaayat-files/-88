
import React from 'react';
import { Shortcut } from '../types';
import { Key } from './Key';

interface ShortcutCardProps {
  shortcut: Shortcut;
}

export const ShortcutCard: React.FC<ShortcutCardProps> = ({ shortcut }) => {
  const isImportant = shortcut.importance === 'high';

  return (
    <div className={`glass p-5 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-xl group flex flex-col justify-between h-full ${isImportant ? 'border-r-4 border-indigo-500' : ''}`}>
      <div className="flex flex-wrap gap-1 mb-4">
        {shortcut.keys.map((k, idx) => (
          <React.Fragment key={idx}>
            <Key label={k} />
            {idx < shortcut.keys.length - 1 && <span className="text-indigo-400 font-bold self-center">+</span>}
          </React.Fragment>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 leading-relaxed">
          {shortcut.description}
        </h3>
        <span className="text-xs font-bold px-2 py-1 bg-slate-800 text-indigo-300 rounded uppercase tracking-wider">
          {shortcut.category}
        </span>
      </div>
    </div>
  );
};
