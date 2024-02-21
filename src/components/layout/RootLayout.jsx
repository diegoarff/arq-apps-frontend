import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';
import { Grid, Stack } from '@mui/joy';
import { useAuthStore } from '../../store/useAuthStore';
import { useEffect } from 'react';

const RootLayout = () => {
	const user = useAuthStore((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/auth/login', { replace: true });
		}
	}, [navigate, user]);

	return (
		<Stack sx={{ height: '100vh' }}>
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
