import { Button, useColorScheme } from '@mui/joy';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
	const { mode, setMode } = useColorScheme();

	return (
		<Button
			variant="soft"
			size="md"
			onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
		>
			{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
		</Button>
	);
};

export default ThemeToggle;
