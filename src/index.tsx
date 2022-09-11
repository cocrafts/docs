import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

export const App: FC = () => {
	return (
		<View style={styles.container}>
			<Text>App</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {},
});
