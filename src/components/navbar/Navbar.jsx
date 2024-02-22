import { Box, Button, Stack } from '@mui/joy';
import LogoutIcon from '@mui/icons-material/Logout';
import Searchbar from './Searchbar';
import UserProfile from './UserProfile';
import { useAuthStore } from '../../store/useAuthStore';
import ThemeToggle from '../ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const onLogout = useAuthStore((state) => state.onLogout);
	const navigate = useNavigate();

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

			<img
				src="/Logo-cut.png"
				alt="CodeCampus"
				style={{ position: 'absolute', left: 20, width: 60, cursor: 'pointer' }}
				onClick={() => {
					navigate('/');
				}}
			/>
			<Box sx={{ display: 'flex', position: 'absolute', right: 20, gap: 2 }}>
				<UserProfile />
				<ThemeToggle />
				<Button
					variant="plain"
					color="danger"
					size="md"
					onClick={() => {
						onLogout();
						navigate('/auth/login', { replace: true });
					}}
				>
					<LogoutIcon />
				</Button>
			</Box>
		</Stack>
	);
};

export default Navbar;
