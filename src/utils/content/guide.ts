import { baseUri, createSectionMatrix, SectionConfig } from './internal';

const guideSections: SectionConfig[] = [
	{
		route: 'introduction',
		title: 'Introduction',
		content: require('../../../markdown/guide/introduction.md'),
		uri: baseUri + '/markdown/home/introduction.md',
	},
	{
		route: 'account',
		title: 'Account',
		children: [
			{
				route: 'create-account',
				title: 'Create Account',
				content: require('../../../markdown/guide/account/create-account.md'),
				uri: baseUri + 'markdown/guide/account/create-account.md',
			},
			{
				route: 'withdraw',
				title: 'Withdraw',
				content: require('../../../markdown/guide/account/withdraw.md'),
				uri: baseUri + 'markdown/guide/account/create-account.md',
			},
		],
	},
	{
		route: 'token',
		title: 'Token',
		children: [
			{
				route: 'buy',
				title: 'Get/buy token',
				content: require('../../../markdown/guide/token/buy.md'),
				uri: baseUri + 'markdown/guide/token/buy.md',
			},
		],
	},
	{
		route: 'community',
		title: 'Community',
		children: [
			{
				route: 'join',
				title: 'Join community',
				content: require('../../../markdown/guide/community/join.md'),
				uri: baseUri + 'markdown/guide/community/join.md',
			},
			{
				route: 'activities',
				title: 'Community activities',
				content: require('../../../markdown/guide/community/activities.md'),
				uri: baseUri + 'markdown/guide/community/activities.md',
			},
		],
	},
];

export const guideMatrix = createSectionMatrix(guideSections);
