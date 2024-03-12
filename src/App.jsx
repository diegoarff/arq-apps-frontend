import { CssVarsProvider } from '@mui/joy';
import Snack from './components/Snack';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import themes from './themes';

const App = () => {
	const localeTheme = themes[import.meta.env.VITE_LOCALE] ?? themes['default'];
	return (
		<CssVarsProvider defaultMode="dark" theme={localeTheme}>
			<Snack />
			<RouterProvider router={router} />
		</CssVarsProvider>
	);
};

export default App;
