import React, { FC, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { themeState } from '@metacraft/ui';
import { navigate } from 'stacks//shared';
import { useSnapshot } from 'utils/hook';

import HomeNavigation from './Navigation';

interface Props {
	style?: ViewStyle;
	children?: ReactNode;
}

export const HomeLayout: FC<Props> = ({ style, children }) => {
	const { sizes } = useSnapshot(themeState);
	const containerStyle: ViewStyle = {
		flex: 1,
		paddingTop: sizes.topNavigation,
	};

	return (
		<View style={[containerStyle, style]}>
			<HomeNavigation
				sizes={sizes}
				onNavigate={({ route, params }) => navigate(route, params)}
			/>
			{children}
		</View>
	);
};

export default HomeLayout;
