import React from 'react';
import { ProjectDetail } from '../types';

interface ProjectDetailScreenProps {
  project: ProjectDetail;
  onBackToWork: () => void;
}

export const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = ({
  project,
  onBackToWork,
}) => {
  return (
    <main className="flex-grow w-full max-w-[2560px] mx-auto px-6 md:px-12 lg:px-20 pt-[120px] lg:pt-[150px] pb-[120px] flex flex-col">
      {/* Subheader Bar / Back Control */}
      <div className="w-full border-b border-neutral-200 dark:border-neutral-800 pb-5 mb-10 flex items-center justify-between">
        <button
          onClick={onBackToWork}
          className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.15em] uppercase text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors duration-200 font-medium cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          ALL PROJECTS (08)
        </button>

        <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase hidden sm:inline-block">
          ARCHIONE Editorial Archive
        </span>
      </div>

      {/* Asymmetric Split Grid (20% Text / 80% Photo Stream on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 flex-grow items-start">
        {/* Left Column: Pure Text & Architectural Documentation (Sticky on desktop) */}
        <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-[140px] flex flex-col border-b lg:border-b-0 border-neutral-200 dark:border-neutral-800 pb-8 lg:pb-0 self-start">
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 space-y-6 w-full">
            <div>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 mb-2 leading-snug">
                {project.title}
              </h1>
              <div className="text-xs text-neutral-400 font-mono tracking-wider">
                {project.locationYear}
              </div>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Project Specifications */}
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-100 dark:border-neutral-800/80 pt-5 text-[11px]">
              <div>
                <span className="text-neutral-400 uppercase tracking-widest text-[9px] block mb-1 font-mono">
                  BUILDING USE
                </span>
                <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                  {project.buildingUse}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest text-[9px] block mb-1 font-mono">
                  BUILT AREA
                </span>
                <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                  {project.builtArea}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest text-[9px] block mb-1 font-mono">
                  DESIGN TEAM
                </span>
                <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                  {project.designTeam}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest text-[9px] block mb-1 font-mono">
                  CONTRACTOR
                </span>
                <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                  {project.contractor}
                </span>
              </div>
            </div>

            {/* Back button repeated for convenient mobile navigation */}
            <div className="pt-4 lg:hidden">
              <button
                onClick={onBackToWork}
                className="w-full py-2.5 text-xs uppercase font-mono tracking-widest border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-center hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                ← Back to Project Grid
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Photo Stream */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col space-y-12 md:space-y-16">
          {project.images.map((img, idx) => (
            <figure key={idx} className="w-full">
              <div className="w-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden border border-neutral-200/70 dark:border-neutral-800 shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt || `${project.title} - View ${idx + 1}`}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  className="w-full h-auto block object-cover transition-opacity duration-500 hover:opacity-95"
                />
              </div>
              {img.alt && (
                <figcaption className="text-[10px] md:text-[11px] font-mono text-neutral-400 mt-2 tracking-wide">
                  {String(idx + 1).padStart(2, '0')} / {img.alt}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
};
