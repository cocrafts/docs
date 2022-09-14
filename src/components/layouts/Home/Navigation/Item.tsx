import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@metacraft/ui';

import { NavigationConfig } from './shared';

interface Props {
	item: NavigationConfig;
	onPress?: (item: NavigationConfig) => void;
}

export const NavigationItem: FC<Props> = ({ item, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onPress?.(item)}>
			<Text style={styles.title}>{item.title}</Text>
		</TouchableOpacity>
	);
};

export default NavigationItem;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 12,
		justifyContent: 'center',
	},
	title: {
		fontSize: 15,
	},
});
