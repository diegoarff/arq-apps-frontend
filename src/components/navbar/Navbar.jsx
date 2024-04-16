import { Box, Stack } from '@mui/joy';
import Searchbar from './Searchbar';
import UserProfile from './UserProfile';
import ThemeToggle from '../ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
			</Box>
		</Stack>
	);
};

export default Navbar;
