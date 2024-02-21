import { Button, Stack, useColorScheme } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Searchbar from './Searchbar';
import UserProfile from './UserProfile';

const Navbar = () => {
	const { mode, setMode } = useColorScheme();

	return (
		<>
			<Stack
				direction="row"
				spacing={2}
				sx={{
					height: 60,
					backgroundColor: '#999999',
				}}
			>
				<Stack
					spacing={2}
					sx={{
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Searchbar />
				</Stack>

				<Stack
					direction="row"
					spacing={2}
					justifyContent="flex-end"
					alignItems="center"
					sx={{ flex: 1, paddingRight: 3 }}
				>
					<UserProfile />

					<Button
						variant="soft"
						size="md"
						onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
					>
						{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
					</Button>

					<Button
						variant="solid"
						color="danger"
						size="md"
						startDecorator={<LogoutIcon />}
					>
						Salir
					</Button>
				</Stack>
			</Stack>
		</>
	);
};

export default Navbar;
