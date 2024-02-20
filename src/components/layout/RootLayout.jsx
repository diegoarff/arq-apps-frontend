import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Grid, Stack } from '@mui/joy';

const RootLayout = () => {
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
