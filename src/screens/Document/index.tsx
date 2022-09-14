import React, { FC } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { Markdown, Text, themeState } from '@metacraft/ui';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import HomeLayout from 'components/layouts/Home';
import PageGlance from 'components/PageGlance';
import PageNavigator from 'components/PageNavigator';
import { RootParamList } from 'stacks/shared';
import { SectionConfig } from 'utils/content';
import { useSnapshot } from 'utils/hook';

import { extractSection } from './shared';

interface Props {
	navigation: NavigationProp<RootParamList, 'Document'>;
	route: RouteProp<RootParamList, 'Document'>;
}

export const DocumentScreen: FC<Props> = ({ route, navigation }) => {
	const { sizes } = useSnapshot(themeState);
	const { sections, section } = extractSection(route.params);

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
		paddingLeft: 16 + sizes.leftNavigation,
		paddingRight: 16, // + rightPaneSize,
		marginHorizontal: 'auto',
		paddingTop: 18,
		paddingBottom: 32,
	};

	const onNavigate = ({ id }: SectionConfig) => {
		const [, sectionId, placeId] = id?.split('/') || [];

		navigation.navigate('Document', {
			group: route.params?.group || 'guide',
			section: sectionId,
			place: placeId || '',
		});
	};

	return (
		<HomeLayout>
			<View style={contentContainer}>
				<ScrollView contentContainerStyle={scrollContainerStyle}>
					<Text style={styles.pageTitle}>{section.title}</Text>
					<Markdown content={section?.content as string} />
				</ScrollView>
			</View>
			<View style={styles.floatContainer}>
				<PageNavigator
					sizes={sizes}
					sections={sections}
					onNavigate={onNavigate}
				/>
				{/*<PageGlance size={rightPaneSize} />*/}
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
	pageTitle: {
		fontSize: 32,
		fontWeight: '500',
	},
});
