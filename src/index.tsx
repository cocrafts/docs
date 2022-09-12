import { FC } from 'react';
import { Provider as MetacraftProvider } from '@metacraft/ui';
import { docsTheme } from 'utils/theme';

import ApplicationStack from './stacks';

export const App: FC = () => {
	return (
		<MetacraftProvider theme={docsTheme}>
			<ApplicationStack />
		</MetacraftProvider>
	);
};

export default App;
