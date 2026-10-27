import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatKRW,
  calculateTotalContractValue,
  getRecordsGroupedByYear,
  parseScreenFromHash,
  buildHash,
  getProjectDetail
} from './portfolio';

test('formatKRW properly formats numbers with Korean won sign and commas', () => {
  assert.equal(formatKRW(3014000000), '₩3,014,000,000');
  assert.equal(formatKRW(63432200), '₩63,432,200');
  assert.equal(formatKRW(0), '₩0');
});

test('calculateTotalContractValue sums amounts correctly', () => {
  const sample = [
    { year: 2026, clientAndTitle: 'P1', contractValueKRW: 1000, contractValueFormatted: '₩1,000', status: '준공' as const },
    { year: 2026, clientAndTitle: 'P2', contractValueKRW: 2500, contractValueFormatted: '₩2,500', status: '진행중' as const },
  ];
  assert.equal(calculateTotalContractValue(sample), 3500);
});

test('getRecordsGroupedByYear groups records in descending order of year', () => {
  const sample = [
    { year: 2024, clientAndTitle: 'A', contractValueKRW: 10, contractValueFormatted: '₩10', status: '준공' as const },
    { year: 2026, clientAndTitle: 'B', contractValueKRW: 20, contractValueFormatted: '₩20', status: '진행중' as const },
    { year: 2024, clientAndTitle: 'C', contractValueKRW: 30, contractValueFormatted: '₩30', status: '준공' as const },
  ];
  const groups = getRecordsGroupedByYear(sample);
  assert.equal(groups.length, 2);
  assert.equal(groups[0].year, 2026);
  assert.equal(groups[0].records.length, 1);
  assert.equal(groups[1].year, 2024);
  assert.equal(groups[1].records.length, 2);
});

test('parseScreenFromHash correctly handles routes and project slugs', () => {
  assert.deepEqual(parseScreenFromHash(''), { screen: 'home' });
  assert.deepEqual(parseScreenFromHash('#'), { screen: 'home' });
  assert.deepEqual(parseScreenFromHash('#work'), { screen: 'work' });
  assert.deepEqual(parseScreenFromHash('#about'), { screen: 'about' });
  assert.deepEqual(parseScreenFromHash('#contact'), { screen: 'contact' });
  assert.deepEqual(parseScreenFromHash('#uijeongbu-gallery'), { screen: 'project-detail', projectId: 'uijeongbu-gallery' });
  assert.deepEqual(parseScreenFromHash('#project/sejong-aspen'), { screen: 'project-detail', projectId: 'sejong-aspen' });
});

test('buildHash formats proper anchors', () => {
  assert.equal(buildHash('home'), '#');
  assert.equal(buildHash('work'), '#work');
  assert.equal(buildHash('about'), '#about');
  assert.equal(buildHash('contact'), '#contact');
  assert.equal(buildHash('project-detail', 'sejong-aspen'), '#project/sejong-aspen');
});

test('getProjectDetail returns valid project data for known slugs', () => {
  const detail = getProjectDetail('uijeongbu-gallery');
  assert.ok(detail);
  assert.equal(detail?.title, '의정부시 의정부동 M/H 축조공사');
  assert.ok(detail?.images.length > 0);
});
