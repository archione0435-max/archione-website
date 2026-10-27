import React, { useState } from 'react';
import { ScreenType } from '../types';

interface NavigationProps {
  activeScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  isHeroMode?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeScreen,
  onNavigate,
  isHeroMode = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  if (isHeroMode) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-150">
        <nav
          className="w-full flex justify-between items-center px-6 md:px-12 py-6 text-white max-w-[2560px] mx-auto"
          aria-label="Hero Navigation"
        >
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="font-semibold tracking-tight text-[20px] text-white hover:opacity-80 transition-opacity cursor-pointer text-left"
            aria-label="ARCHIONE Home"
          >
            ARCHIONE
          </button>

          {/* Desktop Centered Nav */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-8">
            <button
              onClick={() => handleLinkClick('work')}
              className={`text-[12px] font-medium tracking-[0.1em] uppercase transition-opacity duration-150 cursor-pointer ${
                activeScreen === 'work' ? 'border-b border-white pb-0.5' : 'hover:opacity-70'
              }`}
            >
              WORK
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={`text-[12px] font-medium tracking-[0.1em] uppercase transition-opacity duration-150 cursor-pointer ${
                activeScreen === 'about' ? 'border-b border-white pb-0.5' : 'hover:opacity-70'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-[12px] font-medium tracking-[0.1em] uppercase transition-opacity duration-150 cursor-pointer ${
                activeScreen === 'contact' ? 'border-b border-white pb-0.5' : 'hover:opacity-70'
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-white focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>

        {/* Mobile Fullscreen Overlay Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-between p-8 pt-24 text-white"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col space-y-8 text-left">
              <button
                onClick={() => handleLinkClick('work')}
                className="text-2xl font-light tracking-[0.15em] uppercase hover:text-neutral-400 text-left py-2 border-b border-neutral-800"
              >
                WORK
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="text-2xl font-light tracking-[0.15em] uppercase hover:text-neutral-400 text-left py-2 border-b border-neutral-800"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-2xl font-light tracking-[0.15em] uppercase hover:text-neutral-400 text-left py-2 border-b border-neutral-800"
              >
                CONTACT
              </button>
            </div>
            <div className="text-xs text-neutral-500 font-mono tracking-widest uppercase pb-4">
              © 2025 ARCHIONE Architectural Practice
            </div>
          </div>
        )}
      </header>
    );
  }

  // Interior Navigation
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out border-b border-neutral-100 dark:border-neutral-900">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-[2560px] mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-opacity duration-300 cursor-pointer"
          aria-label="ARCHIONE Home"
        >
          ARCHIONE
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-12" aria-label="Main Navigation">
          <button
            onClick={() => handleLinkClick('work')}
            className={`font-inter text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 cursor-pointer ${
              activeScreen === 'work' || activeScreen === 'project-detail'
                ? 'text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-0.5'
                : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className={`font-inter text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 cursor-pointer ${
              activeScreen === 'about'
                ? 'text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-0.5 font-bold'
                : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`font-inter text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 cursor-pointer ${
              activeScreen === 'contact'
                ? 'text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-0.5'
                : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            {activeScreen === 'contact' ? 'Contact & Profile' : 'Contact'}
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-neutral-900 dark:text-neutral-100 focus:outline-none cursor-pointer"
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-[24px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[73px] z-40 bg-white dark:bg-black p-6 flex flex-col justify-between border-t border-neutral-100 dark:border-neutral-900"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-6 pt-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-lg font-mono tracking-wider uppercase text-left py-3 border-b border-neutral-100 dark:border-neutral-800 text-neutral-500"
            >
              00 / HOME
            </button>
            <button
              onClick={() => handleLinkClick('work')}
              className={`text-xl font-medium tracking-[0.15em] uppercase text-left py-3 border-b border-neutral-100 dark:border-neutral-800 ${
                activeScreen === 'work' || activeScreen === 'project-detail'
                  ? 'text-neutral-900 dark:text-neutral-100 font-bold'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              WORK
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={`text-xl font-medium tracking-[0.15em] uppercase text-left py-3 border-b border-neutral-100 dark:border-neutral-800 ${
                activeScreen === 'about'
                  ? 'text-neutral-900 dark:text-neutral-100 font-bold'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-xl font-medium tracking-[0.15em] uppercase text-left py-3 border-b border-neutral-100 dark:border-neutral-800 ${
                activeScreen === 'contact'
                  ? 'text-neutral-900 dark:text-neutral-100 font-bold'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              CONTACT &amp; PROFILE
            </button>
          </div>
          <div className="text-[11px] text-neutral-400 font-mono tracking-wider pb-6">
            © 2025 ARCHIONE Architectural Practice &amp; Spatial Research
          </div>
        </div>
      )}
    </header>
  );
};
