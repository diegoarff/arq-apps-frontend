import { CssVarsProvider } from '@mui/joy';
import Snack from './components/Snack';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import themes from './themes';
import { useAuthStore } from './store/useAuthStore';

const App = () => {
	const user = useAuthStore((state) => state.user);
	const localeTheme = user ? themes[user.university.locale] : themes['default'];
	return (
		<CssVarsProvider defaultMode="dark" theme={localeTheme}>
			<Snack />
			<RouterProvider router={router} />
		</CssVarsProvider>
	);
};

export default App;
