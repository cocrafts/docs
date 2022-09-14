import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import { ThemeSizes } from '@metacraft/ui';
import { iStyles } from 'utils/style';

import Item from './Item';
import { NavigationConfig, navigationItems } from './shared';

const { Flag } = stormIcons;

interface Props {
	sizes: ThemeSizes;
	onNavigate?: (item: NavigationConfig) => void;
}

export const HomeNavigation: FC<Props> = ({ sizes, onNavigate }) => {
	const navContainer: ViewStyle = {
		flexDirection: 'row',
		marginLeft: 100,
		height: sizes.topNavigation,
	};

	return (
		<View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.innerContainer]}>
				<TouchableOpacity activeOpacity={0.9}>
					<Flag size={100} style={styles.flag} />
				</TouchableOpacity>
				<View style={navContainer}>
					{navigationItems.map((item, i) => {
						return <Item key={i} item={item} onPress={onNavigate} />;
					})}
				</View>
			</View>
		</View>
	);
};

export default HomeNavigation;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		borderWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.05)',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.05,
		shadowRadius: 24,
	},
	flag: {
		position: 'absolute',
		top: -1,
		left: 0,
	},
	innerContainer: {
		flexDirection: 'row',
		paddingLeft: 10,
	},
});
