import { baseUri, createSectionMatrix, SectionConfig } from './internal';

const guideSections: SectionConfig[] = [
	{
		route: 'introduction',
		title: 'Introduction',
		content: require('../../../markdown/guide/introduction.md'),
		uri: baseUri + '/markdown/guide/introduction.md',
	},
	{
		route: 'getting-started',
		title: 'Getting Started',
		children: [
			{
				route: 'welcome',
				title: 'Welcome',
				content: require('../../../markdown/guide/getting-started/welcome.md'),
				uri: baseUri + '/markdown/guide/getting-started/welcome.md',
			},
			{
				route: 'create-account',
				title: 'Create Account',
				content: require('../../../markdown/guide/getting-started/create-account.md'),
				uri: baseUri + '/markdown/guide/getting-started/create-account.md',
			},
						{
				route: 'view-balance',
				title: 'View Your Balance',
				content: require('../../../markdown/guide/getting-started/view-balance.md'),
				uri: baseUri + '/markdown/guide/getting-started/view-balance.md',
			},
			{
				route: 'withdraw',
				title: 'Withdraw',
				content: require('../../../markdown/guide/getting-started/withdraw.md'),
				uri: baseUri + '/markdown/guide/getting-started/withdraw.md',
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
				uri: baseUri + '/markdown/guide/token/buy.md',
			},
			{
				route: 'unlock-schedule',
				title: 'Unlock Schedule',
				content: require('../../../markdown/guide/token/unlock-schedule.md'),
				uri: baseUri + '/markdown/guide/token/unlock-schedule.md',
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
				uri: baseUri + '/markdown/guide/community/join.md',
			},
			{
				route: 'activities',
				title: 'Community activities',
				content: require('../../../markdown/guide/community/activities.md'),
				uri: baseUri + '/markdown/guide/community/activities.md',
			},
		],
	},
];

export const guideMatrix = createSectionMatrix(guideSections);
