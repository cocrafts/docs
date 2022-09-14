import { RootParamList } from 'stacks/shared';

export interface NavigationConfig {
	title: string;
	route: keyof RootParamList;
	params?: RootParamList[keyof RootParamList];
}

export const navigationItems: NavigationConfig[] = [
	{
		title: 'Guides',
		route: 'Document',
		params: { group: 'guide' },
	},
	{
		title: 'Whitepaper',
		route: 'Document',
		params: { group: 'whitepaper' },
	},
];
