/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ScreenType } from './types';
import { Navigation } from './components/Navigation';
import { HeroScreen } from './components/HeroScreen';
import { WorkGridScreen } from './components/WorkGridScreen';
import { ProjectDetailScreen } from './components/ProjectDetailScreen';
import { AboutScreen } from './components/AboutScreen';
import { ContactProfileScreen } from './components/ContactProfileScreen';
import { Footer } from './components/Footer';
import { parseScreenFromHash, buildHash, getProjectDetail } from './utils/portfolio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(() => {
    return parseScreenFromHash(window.location.hash).screen;
  });

  const [activeProjectId, setActiveProjectId] = useState<string | undefined>(() => {
    return parseScreenFromHash(window.location.hash).projectId || 'uijeongbu-gallery';
  });

  // Listen to hash changes (browser back/forward & anchor jumps)
  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseScreenFromHash(window.location.hash);
      setCurrentScreen(parsed.screen);
      if (parsed.projectId) {
        setActiveProjectId(parsed.projectId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (screen: ScreenType, projectId?: string) => {
    setCurrentScreen(screen);
    if (projectId) {
      setActiveProjectId(projectId);
    }
    window.location.hash = buildHash(screen, projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string) => {
    navigateTo('project-detail', projectId);
  };

  const currentProjectDetail = activeProjectId
    ? getProjectDetail(activeProjectId) || getProjectDetail('uijeongbu-gallery')
    : getProjectDetail('uijeongbu-gallery');

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Dynamic Header */}
      <Navigation
        activeScreen={currentScreen}
        onNavigate={(screen) => navigateTo(screen)}
        isHeroMode={currentScreen === 'home'}
      />

      {/* Screen Views */}
      {currentScreen === 'home' && (
        <HeroScreen onNavigateWork={() => navigateTo('work')} />
      )}

      {currentScreen === 'work' && (
        <>
          <WorkGridScreen onSelectProject={handleSelectProject} />
          <Footer />
        </>
      )}

      {currentScreen === 'project-detail' && currentProjectDetail && (
        <>
          <ProjectDetailScreen
            project={currentProjectDetail}
            onBackToWork={() => navigateTo('work')}
          />
          <Footer />
        </>
      )}

      {currentScreen === 'about' && (
        <>
          <AboutScreen />
          <Footer />
        </>
      )}

      {currentScreen === 'contact' && (
        <>
          <ContactProfileScreen />
          <Footer />
        </>
      )}
    </div>
  );
}
