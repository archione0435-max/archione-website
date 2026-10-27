import React from 'react';
import { HERO_BACKGROUND_IMAGE } from '../data/portfolioData';

interface HeroScreenProps {
  onNavigateWork: () => void;
}

export const HeroScreen: React.FC<HeroScreenProps> = ({ onNavigateWork }) => {
  return (
    <section
      className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden cursor-pointer select-none"
      onClick={onNavigateWork}
      title="Click anywhere to explore Work archive"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            backgroundImage: `url("${HERO_BACKGROUND_IMAGE}")`,
          }}
          role="img"
          aria-label="Monochromatic brutalist concrete architectural photograph"
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main viewport visual breathing space */}
      <div className="relative z-10 flex-grow flex items-center justify-center p-8">
        {/* Subtle hint for screen-reader & keyboard users */}
        <span className="sr-only">ARCHIONE Architectural Studio - Click anywhere to view Work</span>
      </div>

      {/* Subtle bottom indicators if needed, matching Stitch */}
      <div className="relative z-10 w-full max-w-[2560px] mx-auto px-6 md:px-12 pb-8 flex justify-between items-center text-white/60 text-xs font-mono uppercase tracking-widest">
        <span>ARCHITECTURAL PRACTICE</span>
        <span>SPATIAL RESEARCH</span>
      </div>
    </section>
  );
};
