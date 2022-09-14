import React, { FC } from 'react';
import {
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { Text, ThemeSizes } from '@metacraft/ui';
import { SectionConfig } from 'utils/content';

interface Props {
	sections: SectionConfig[];
	sizes: ThemeSizes;
	onNavigate?: (section: SectionConfig) => void;
}

export const PageNavigator: FC<Props> = ({ sections, sizes, onNavigate }) => {
	const containerStyle: ViewStyle = {
		position: 'absolute',
		top: 50,
		left: 0,
		width: sizes.leftNavigation,
		paddingLeft: 16,
	};

	return (
		<View style={containerStyle}>
			{sections.map((section, i) => {
				const titleStyle: TextStyle = {
					fontSize: 15,
					color: section.content ? '#555555' : '#888888',
					// fontWeight: section.content ? '500' : '400',
					marginLeft: (section.level || 0) * 8,
				};

				return (
					<TouchableOpacity
						key={i}
						disabled={!section.content}
						style={styles.titleContainer}
						onPress={() => onNavigate?.(section)}
					>
						<Text style={titleStyle}>{section.title}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default PageNavigator;

export const styles = StyleSheet.create({
	heading: {
		fontSize: 30,
		lineHeight: 34,
		marginBottom: 24,
		fontWeight: '500',
		color: '#3f4246',
	},
	titleContainer: {
		paddingVertical: 3,
	},
	title: {
		fontSize: 15,
		color: '#666666',
	},
});
