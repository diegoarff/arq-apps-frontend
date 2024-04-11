import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter';
import './index.css';
import '@smastrom/react-rating/style.css';
import { StyledEngineProvider } from '@mui/joy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './i18n';
import App from './App';

const queryClient = new QueryClient({
	// Put the best options for perfomance
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
