import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from '@metacraft/ui';

interface Props {
	size: number;
}

export const PageGlance: FC<Props> = ({ size = 150 }) => {
	const containerStyle: ViewStyle = {
		position: 'absolute',
		top: 0,
		right: 0,
		width: size,
	};

	return (
		<View style={containerStyle}>
			<Text>PageGlance</Text>
		</View>
	);
};

export default PageGlance;
