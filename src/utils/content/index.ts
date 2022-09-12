import { homeSections } from './home';
import { SectionConfig } from './internal';
import { whitepaperSections } from './whitepaper';

export const sectionGroups: Record<string, SectionConfig[]> = {
	home: homeSections,
	whitepaper: whitepaperSections,
};

export * from './internal';
