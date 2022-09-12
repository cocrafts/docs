import React, { FC } from 'react';
import { themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DocumentScreen from 'screens/Document';
import { useSnapshot } from 'valtio';

import { linking, screenOptions } from './shared';

const Stack = createStackNavigator();

export const ApplicationStack: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<NavigationContainer theme={theme} linking={linking}>
			<Stack.Navigator screenOptions={screenOptions.navigator}>
				<Stack.Screen name="Document" component={DocumentScreen as never} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ApplicationStack;
