import { guideMatrix } from './guide';
import { SectionMatrix } from './internal';
import { whitepaperMatrix } from './whitepaper';

export const sectionMatrices: Record<string, SectionMatrix> = {
	guide: guideMatrix,
	whitepaper: whitepaperMatrix,
};

export * from './internal';
