import { Box, Button, Stack } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import Searchbar from './Searchbar';
import UserProfile from './UserProfile';
import { useAuthStore } from '../../store/useAuthStore';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
	const onLogout = useAuthStore((state) => state.onLogout);

	return (
		<Stack
			direction="row"
			justifyContent={'center'}
			alignItems={'center'}
			spacing={2}
			sx={{
				backgroundColor: 'background.level1',
				borderBottom: '1px solid',
				borderColor: 'divider',
				position: 'relative',
				minHeight: 64,
			}}
		>
			<Searchbar />

			<Box sx={{ display: 'flex', position: 'absolute', right: 20, gap: 2 }}>
				<UserProfile />
				<ThemeToggle />
				<Button variant="soft" color="danger" size="md" onClick={onLogout}>
					<LogoutIcon />
				</Button>
			</Box>
		</Stack>
	);
};

export default Navbar;
