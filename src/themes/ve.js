import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				neutral: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
				},
				primary: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
				},
			},
		},
		dark: {
			palette: {
				neutral: {
					50: '#fee2e2',
					100: '#fecaca',
					200: '#fca5a5',
					300: '#f87171',
					400: '#ef4444',
					500: '#dc2626',
					600: '#b91c1c',
					700: '#991b1b',
					800: '#7f1d1d',
					900: '#3f0e0e',
				},
				primary: {
					50: '#fee2e2',
					100: '#fecaca',
					200: '#fca5a5',
					300: '#f87171',
					400: '#ef4444',
					500: '#dc2626',
					600: '#b91c1c',
					700: '#991b1b',
					800: '#7f1d1d',
					900: '#3f0e0e',
				},
			},
		},
	},
});

export default theme;
