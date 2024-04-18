import { Box, Button, Stack, Typography } from '@mui/joy';
import { useUserProfile } from '../hooks/queries/users';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import SpinnerLoader from '../components/loaders/SpinnerLoader';
import AdminChip from '../components/chips/AdminChip';

const MyProfilePage = () => {
	const authUser = useAuthStore((state) => state.user);
	const navigate = useNavigate();

	const { data, status, error } = useUserProfile(authUser?.id);
	const user = data && data[0];

	if (status === 'pending') {
		return <SpinnerLoader />;
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos: ' + error.message);
	}

	return (
		<Stack>
			<Box m={4}>
				<Button
					color="primary"
					onClick={() => navigate(-1)}
					startDecorator={<ArrowBack />}
				>
					Volver
				</Button>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
					padding: 2,
				}}
			>
				<Typography level="h1" sx={{ my: 2 }}>
					Perfil de Usuario
				</Typography>

				<Typography level="body-lg" sx={{ marginBottom: 1 }}>
					Username: <Typography level="h4">{user.username} </Typography>
					{user.role === 'admin' && <AdminChip />}
				</Typography>

				<Typography level="body-lg" sx={{ marginBottom: 1 }}>
					Cuenta creada el:{' '}
					<Typography level="h4">
						{new Date(user.createdAt).toLocaleDateString()}
					</Typography>
				</Typography>

				<Typography level="body-lg">
					Posts creados:{' '}
					<Typography level="h4">{user.numberOfPosts}</Typography>
				</Typography>
			</Box>
		</Stack>
	);
};

export default MyProfilePage;
