import { baseUri, SectionConfig } from './internal';

export const whitepaperSections: SectionConfig[] = [
	{
		route: 'executive-summary',
		title: 'Executive Summary',
		content: require('../../../markdown/whitepaper/executive-summary.md'),
		uri: baseUri + '/markdown/whitepaper/executive-summary.md',
	},
	{
		route: 'metacraft-framework',
		title: 'Metacraft Framework',
		content: require('../../../markdown/whitepaper/metacraft-framework.md'),
		uri: baseUri + '/markdown/whitepaper/metacraft-framework.md',
	},
	{
		route: 'metacraft-studio',
		title: 'Metacraft Studio',
		content: require('../../../markdown/whitepaper/metacraft-studio.md'),
		uri: baseUri + '/markdown/whitepaper/metacraft-studio.md',
	},
	{
		route: 'tokenomic',
		title: 'Tokenomic',
		content: require('../../../markdown/whitepaper/tokenomic.md'),
		uri: baseUri + '/markdown/whitepaper/tokenomic.md',
	},
	{
		route: 'crowd-contribution',
		title: 'Crowd Contribution',
		content: require('../../../markdown/whitepaper/crowd-contribution.md'),
		uri: baseUri + '/markdown/whitepaper/crowd-contribution.md',
	},
];
