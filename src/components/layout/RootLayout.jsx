import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';
import { Box, Stack } from '@mui/joy';
import { useAuthStore } from '../../store/useAuthStore';
import { useEffect } from 'react';

const RootLayout = () => {
	const { user, token } = useAuthStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user || !token) {
			return navigate('/auth/login', { replace: true });
		}
	}, [user, token, navigate]);

	return (
		<Stack sx={{ height: '100dvh', backgroundColor: 'background.surface' }}>
			<Navbar />
			<Stack direction="row" flex={1}>
				<Box sx={{ maxWidth: 350 }}>
					<Sidebar />
				</Box>
				<Box
					sx={{
						height: 'calc(100vh - 64px)',
						px: 8,
						py: 4,
						flex: 1,
						overflowY: 'scroll',

						'&::-webkit-scrollbar': {
							width: 6,
						},

						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'background.level2',
							borderRadius: 8,
						},
					}}
				>
					<Outlet />
				</Box>
			</Stack>
		</Stack>
	);
};

export default RootLayout;
