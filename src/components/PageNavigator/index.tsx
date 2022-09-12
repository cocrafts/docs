import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { Text, ThemeSizes } from '@metacraft/ui';
import { SectionConfig } from 'utils/content';

interface Props {
	sections: SectionConfig[];
	sizes: ThemeSizes;
}

export const PageNavigator: FC<Props> = ({ sections, sizes }) => {
	const containerStyle: ViewStyle = {
		position: 'absolute',
		top: 0,
		left: 0,
		width: sizes.leftNavigation,
	};

	return (
		<View style={containerStyle}>
			{sections.map((section, i) => {
				return <Text key={i}>{section.title}</Text>;
			})}
		</View>
	);
};

export default PageNavigator;
