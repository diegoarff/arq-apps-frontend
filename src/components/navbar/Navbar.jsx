import { Button, Stack } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import Searchbar from './Searchbar';
import UserProfile from './UserProfile';
import { useAuthStore } from '../../store/useAuthStore';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
	const onLogout = useAuthStore((state) => state.onLogout);

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

					<ThemeToggle />

					<Button
						variant="solid"
						color="danger"
						size="md"
						startDecorator={<LogoutIcon />}
						onClick={onLogout}
					>
						Salir
					</Button>
				</Stack>
			</Stack>
		</>
	);
};

export default Navbar;
