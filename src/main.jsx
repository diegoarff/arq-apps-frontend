import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@fontsource/inter';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssVarsProvider defaultMode="dark">
				<App />
			</CssVarsProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
