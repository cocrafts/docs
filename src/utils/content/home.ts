import { baseUri, SectionConfig } from './internal';

export const homeSections: SectionConfig[] = [
	{
		route: 'introduction',
		title: 'Introduction',
		content: require('../../../markdown/home/introduction.md'),
		uri: baseUri + '/markdown/home/introduction.md',
	},
];
