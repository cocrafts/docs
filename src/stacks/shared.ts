import {
	createNavigationContainerRef,
	LinkingOptions,
} from '@react-navigation/native';
import {
	CardStyleInterpolators,
	StackNavigationOptions,
} from '@react-navigation/stack';

interface ScreenOptions {
	navigator: StackNavigationOptions;
	fade: StackNavigationOptions;
}

export const screenOptions: ScreenOptions = {
	navigator: {
		headerShown: false,
		animationEnabled: false,
	},
	fade: {
		cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
	},
};

export type DocumentParamList = {
	group?: string;
	section?: string;
	place?: string;
	glance?: string;
};

export type RootParamList = {
	Document: DocumentParamList;
};

export const linking: LinkingOptions<RootParamList> = {
	prefixes: ['https://docs.stormgate.io'],
	config: {
		screens: {
			Document: {
				path: '/:group?/:section?/:place?',
			},
		},
	},
};

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (
	name: keyof RootParamList,
	params?: RootParamList[keyof RootParamList],
) => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params as never);
	}
};
