import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Stack } from '@mui/joy';
import Navbar from '../navbar/Navbar';

const UserLayout = () => {
	const user = useAuthStore((state) => state.user);

	if (!user) {
		return <Navigate to="/auth/login" replace />;
	}

	return (
		<Stack sx={{ height: '100dvh', backgroundColor: 'background.surface' }}>
			<Navbar />
			<Outlet />
		</Stack>
	);
};

export default UserLayout;
