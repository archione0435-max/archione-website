import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full z-40 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900 transition-all duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-12 py-6 w-full max-w-[2560px] mx-auto text-xs text-neutral-400 font-mono gap-3">
        <span className="text-[10px] uppercase tracking-widest">Mon–Fri 09:30–18:30 KST</span>
        <span className="text-[10px] text-center sm:text-right">
          © 2025 ARCHIONE Architects. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
