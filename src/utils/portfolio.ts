import { ScreenType, ConstructionRecord, ProjectItem } from '../types';
import { WORK_GRID_ITEMS, PROJECT_DETAILS } from '../data/portfolioData';

/**
 * Formats a number to Korean Won currency string, e.g. 10980000000 -> "₩10,980,000,000"
 */
export function formatKRW(amount: number): string {
  return '₩' + amount.toLocaleString('en-US');
}

/**
 * Calculates sum of all contract values
 */
export function calculateTotalContractValue(records: ConstructionRecord[]): number {
  return records.reduce((sum, item) => sum + item.contractValueKRW, 0);
}

/**
 * Groups construction records by year (descending)
 */
export function getRecordsGroupedByYear(records: ConstructionRecord[]): Array<{ year: number; records: ConstructionRecord[] }> {
  const groups: Record<number, ConstructionRecord[]> = {};
  for (const rec of records) {
    if (!groups[rec.year]) {
      groups[rec.year] = [];
    }
    groups[rec.year].push(rec);
  }

  const years = Object.keys(groups)
    .map(Number)
    .sort((a, b) => b - a);

  return years.map((year) => ({
    year,
    records: groups[year],
  }));
}

/**
 * Parses URL hash into active screen and optional project ID
 */
export function parseScreenFromHash(hash: string): { screen: ScreenType; projectId?: string } {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean || clean === 'home') {
    return { screen: 'home' };
  }
  if (clean === 'work' || clean === 'archive-grid') {
    return { screen: 'work' };
  }
  if (clean === 'about') {
    return { screen: 'about' };
  }
  if (clean === 'contact' || clean === 'profile') {
    return { screen: 'contact' };
  }
  if (clean.startsWith('project/')) {
    const pId = clean.replace('project/', '');
    return { screen: 'project-detail', projectId: pId };
  }
  // Check direct project slug hashes like #uijeongbu-gallery
  if (PROJECT_DETAILS[clean]) {
    return { screen: 'project-detail', projectId: clean };
  }

  return { screen: 'home' };
}

/**
 * Builds hash for navigation
 */
export function buildHash(screen: ScreenType, projectId?: string): string {
  if (screen === 'home') return '#';
  if (screen === 'work') return '#work';
  if (screen === 'about') return '#about';
  if (screen === 'contact') return '#contact';
  if (screen === 'project-detail' && projectId) return `#project/${projectId}`;
  return '#';
}

/**
 * Finds project item by ID or slug
 */
export function getProjectById(id: string) {
  return WORK_GRID_ITEMS.find((p) => p.id === id);
}

/**
 * Finds project detail specifications & photos
 */
export function getProjectDetail(id: string) {
  return PROJECT_DETAILS[id] || null;
}
