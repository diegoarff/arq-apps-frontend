import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@fontsource/inter';
import './index.css';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy';
import { router } from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './i18n';
import themes from './themes';
import { useAuthStore } from './store/useAuthStore';

const { user } = useAuthStore.getState();
const localeTheme = user ? themes[user.university.locale] : themes['default'];

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<StyledEngineProvider injectFirst>
			<CssVarsProvider defaultMode="dark" theme={localeTheme}>
					<RouterProvider router={router} />
				</CssVarsProvider>
			</StyledEngineProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
