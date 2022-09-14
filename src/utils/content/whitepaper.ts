import { baseUri, createSectionMatrix, SectionConfig } from './internal';

const sections: SectionConfig[] = [
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
	{
		route: 'atem-games',
		title: 'ATEM Game Series',
		content: require('../../../markdown/whitepaper/atem-games.md'),
		uri: baseUri + '/markdown/whitepaper/atem-games.md',
	},
	{
		route: 'under-realm',
		title: 'Under Realm',
		content: require('../../../markdown/whitepaper/under-realm.md'),
		uri: baseUri + '/markdown/whitepaper/under-realm.md',
	},
	{
		route: 'core-team',
		title: 'Core Team',
		content: require('../../../markdown/whitepaper/core-team.md'),
		uri: baseUri + '/markdown/whitepaper/core-team.md',
	},
	{
		route: 'advisor',
		title: 'Advisor',
		content: require('../../../markdown/whitepaper/advisor.md'),
		uri: baseUri + '/markdown/whitepaper/advisor.md',
	},
	{
		route: 'partner-n-backer',
		title: 'Partner & Backer',
		content: require('../../../markdown/whitepaper/partner-n-backer.md'),
		uri: baseUri + '/markdown/whitepaper/partner-n-backer.md',
	},
	{
		route: 'technology',
		title: 'Technology',
		content: require('../../../markdown/whitepaper/technology.md'),
		uri: baseUri + '/markdown/whitepaper/technology.md',
	},
	{
		route: 'roadmap',
		title: 'Roadmap',
		content: require('../../../markdown/whitepaper/roadmap.md'),
		uri: baseUri + '/markdown/whitepaper/roadmap.md',
	},
	{
		route: 'disclaimer',
		title: 'Disclaimer',
		content: require('../../../markdown/whitepaper/disclaimer.md'),
		uri: baseUri + '/markdown/whitepaper/disclaimer.md',
	},
	{
		route: 'glossary',
		title: 'Glossary',
		content: require('../../../markdown/whitepaper/glossary.md'),
		uri: baseUri + '/markdown/whitepaper/glossary.md',
	},
];

export const whitepaperMatrix = createSectionMatrix(sections);
