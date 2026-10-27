export type ScreenType = 'home' | 'work' | 'about' | 'contact' | 'project-detail';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  hasDetail?: boolean;
}

export interface ProjectDetail {
  id: string;
  title: string;
  locationYear: string;
  description: string;
  buildingUse: string;
  builtArea: string;
  designTeam: string;
  contractor: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export interface ConstructionRecord {
  year: number;
  clientAndTitle: string;
  contractValueKRW: number;
  contractValueFormatted: string;
  status: '진행중' | '준공';
}

export interface CertificateItem {
  id: string;
  regNo: string;
  title: string;
  koreanName: string;
  authority: string;
  englishHeading: string;
  description: string;
  iconName: string;
}

export interface TrackRecordSummary {
  year: string;
  projectName: string;
  typology: string;
  location: string;
  scaleArea: string;
}
