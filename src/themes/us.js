import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				neutral: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
				primary: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
			},
		},
		dark: {
			palette: {
				neutral: {
					50: '#e0f2fe',
					100: '#bae6fd',
					200: '#7dd3fc',
					300: '#38bdf8',
					400: '#0ea5e9',
					500: '#0284c7',
					600: '#0369a1',
					700: '#075985',
					800: '#0c4a6e',
					900: '#062537',
				},
				primary: {
					50: '#e0f2fe',
					100: '#bae6fd',
					200: '#7dd3fc',
					300: '#38bdf8',
					400: '#0ea5e9',
					500: '#0284c7',
					600: '#0369a1',
					700: '#075985',
					800: '#0c4a6e',
					900: '#062537',
				},
			},
		},
	},
});

export default theme;
