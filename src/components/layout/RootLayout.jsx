import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';
import { Grid, Stack } from '@mui/joy';
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
		<Stack sx={{ height: '100dvh' }}>
			<Navbar />
			<Grid container sx={{ height: '100%' }}>
				<Grid xs={2} sx={{ height: '100%' }}>
					<Sidebar />
				</Grid>
				<Grid xs={10} sx={{ height: '100%' }}>
					{/* Aquí se renderiza el contenido de children */}
					<Outlet />
				</Grid>
			</Grid>
		</Stack>
	);
};

export default RootLayout;
