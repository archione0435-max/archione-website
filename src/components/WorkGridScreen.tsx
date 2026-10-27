import React from 'react';
import { WORK_GRID_ITEMS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface WorkGridScreenProps {
  onSelectProject: (projectId: string) => void;
}

export const WorkGridScreen: React.FC<WorkGridScreenProps> = ({ onSelectProject }) => {
  const handleItemClick = (item: ProjectItem) => {
    if (item.hasDetail) {
      onSelectProject(item.id);
    }
  };

  return (
    <main className="flex-grow w-full max-w-[2560px] mx-auto px-6 md:px-12 pt-[140px] pb-[160px]">
      {/* Page Header */}
      <div className="mb-12 md:mb-16 border-b border-neutral-100 dark:border-neutral-900 pb-6">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
          WORK
        </h1>
        <p className="text-xs font-mono tracking-widest uppercase text-neutral-400 mt-2">
          Selected Architectural Works &amp; Spatial Installations ({WORK_GRID_ITEMS.length})
        </p>
      </div>

      {/* 4-Column Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
        {WORK_GRID_ITEMS.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              role={item.hasDetail ? 'button' : 'article'}
              tabIndex={item.hasDetail ? 0 : undefined}
              onKeyDown={(e) => {
                if (item.hasDetail && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleItemClick(item);
                }
              }}
              className={`group relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-square select-none ${
                item.hasDetail ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-900' : 'cursor-default'
              }`}
              title={item.title}
              aria-label={`${item.title} - ${item.category} ${item.year}`}
            >
              {/* Project Image */}
              <img
                src={item.coverImage}
                alt={item.title}
                loading={index < 8 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-40"
              />

              {/* Hover and Mobile Caption Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center bg-black/50 backdrop-blur-[2px]">
                <span className="font-sans text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-white mb-1.5 leading-snug max-w-[90%]">
                  {item.title}
                </span>
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-white/80">
                  {item.category} / {item.year}
                </span>
                {item.hasDetail && (
                  <span className="mt-3 text-[10px] uppercase font-mono tracking-widest text-neutral-300 border border-white/30 px-2 py-0.5 rounded">
                    View Project →
                  </span>
                )}
              </div>

              {/* Mobile Persistent Subtle Title Strip (Mobile accessibility) */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 pointer-events-none group-hover:opacity-0 transition-opacity">
                <p className="text-white text-xs font-medium truncate">{item.title}</p>
                <p className="text-white/70 text-[9px] font-mono tracking-wider uppercase mt-0.5">
                  {item.category} · {item.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
