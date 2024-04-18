import { useNavigate, useParams } from 'react-router-dom';
import { useBanUserMutation, useUserProfile } from '../hooks/queries/users';
import SpinnerLoader from '../components/loaders/SpinnerLoader';
import { Box, Button, Stack, Typography } from '@mui/joy';
import { ArrowBack, RemoveCircle } from '@mui/icons-material';
import AdminChip from '../components/chips/AdminChip';
import { useAuthStore } from '../store/useAuthStore';

const UserProfilePage = () => {
	const authUser = useAuthStore((state) => state.user);
	const { userId } = useParams();
	const navigate = useNavigate();

	const { mutate: banUser, isPending } = useBanUserMutation(userId);
	const { data, status, error } = useUserProfile(userId);
	const user = data && data[0];

	if (status === 'pending') {
		return <SpinnerLoader />;
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos: ' + error.message);
	}

	return (
		<Stack>
			<Box>
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

				{authUser?.role === 'admin' && (
					<Button
						variant={user.banned ? 'soft' : 'solid'}
						onClick={banUser}
						startDecorator={<RemoveCircle />}
						loading={isPending}
						disabled={isPending}
					>
						{user.banned ? 'Desbanear' : 'Banear'}
					</Button>
				)}
			</Box>
		</Stack>
	);
};

export default UserProfilePage;
