import React, { FC } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { Markdown, themeState } from '@metacraft/ui';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import HomeLayout from 'components/layouts/Home';
import PageGlance from 'components/PageGlance';
import PageNavigator from 'components/PageNavigator';
import { RootParamList } from 'stacks/shared';
import { sectionGroups } from 'utils/content';
import { useSnapshot } from 'utils/hook';

interface Props {
	navigation: NavigationProp<RootParamList, 'Document'>;
	route: RouteProp<RootParamList, 'Document'>;
}

export const DocumentScreen: FC<Props> = ({ route }) => {
	const { sizes } = useSnapshot(themeState);
	const { section = 'whitepaper', place } = route.params || {};
	const sections = sectionGroups[section];
	const activeSection = place
		? sections.find((i) => i.route === place)
		: sections[0];

	const contentContainer: ViewStyle = {
		position: 'absolute',
		top: sizes.topNavigation,
		left: 0,
		right: 0,
		bottom: 0,
	};

	const scrollContainerStyle: ViewStyle = {
		width: '100%',
		maxWidth: maxContentWidth,
		paddingLeft: sizes.leftNavigation,
		paddingRight: rightPaneSize,
		marginHorizontal: 'auto',
	};

	return (
		<HomeLayout>
			<View style={contentContainer}>
				<ScrollView contentContainerStyle={scrollContainerStyle}>
					<Markdown content={activeSection?.content as string} />
				</ScrollView>
			</View>
			<View style={styles.floatContainer}>
				<PageNavigator sizes={sizes} sections={sections} />
				<PageGlance size={rightPaneSize} />
			</View>
		</HomeLayout>
	);
};

export default DocumentScreen;

const maxContentWidth = 1600;
const rightPaneSize = 220;
const styles = StyleSheet.create({
	floatContainer: {
		width: '100%',
		maxWidth: maxContentWidth,
		marginHorizontal: 'auto',
	},
	innerContainer: {
		flex: 1,
		paddingHorizontal: 24,
	},
});
