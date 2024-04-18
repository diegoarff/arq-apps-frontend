import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from './Sidebar';
import { Box, Stack } from '@mui/joy';
import { useAuthStore } from '../../store/useAuthStore';
import { useUserProfile } from '../../hooks/queries/users';
import SpinnerLoader from '../loaders/SpinnerLoader';

const RootLayout = () => {
	const user = useAuthStore((state) => state.user);
	const { data, isPending } = useUserProfile(user?.id);
	console.log('🚀 ~ RootLayout ~ data:', data);

	if (!user) {
		return <Navigate to="/auth/login" replace />;
	}

	if (isPending) return <SpinnerLoader />;

	if (data && data[0].banned) {
		return <Navigate to="/banned" replace />;
	}

	return (
		<Stack sx={{ height: '100dvh', backgroundColor: 'background.surface' }}>
			<Navbar />
			<Stack direction="row" flex={1}>
				<Sidebar />
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
