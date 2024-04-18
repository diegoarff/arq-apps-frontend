import { useNavigate, useParams } from 'react-router-dom';
import { useUserProfile } from '../hooks/queries/users';
import SpinnerLoader from '../components/loaders/SpinnerLoader';
import { Box, Button, Stack, Typography } from '@mui/joy';
import { ArrowBack } from '@mui/icons-material';
import AdminChip from '../components/chips/AdminChip';

const UserProfilePage = () => {
	const { userId } = useParams();
	const navigate = useNavigate();
	const { data, status, error } = useUserProfile(userId);

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

			{/* <Typography>UserProfilePage - userId: {userId}</Typography> */}

			{/* <Typography>{JSON.stringify(data)}</Typography> */}

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
					padding: 2,
				}}
			>
				<Typography level="h1" sx={{ marginBottom: 2 }}>
					Perfil de Usuario
				</Typography>

				<Typography level="body-lg" sx={{ marginBottom: 1 }}>
					Username: <Typography level="h3">{data[0]?.username} </Typography>
					{data[0]?.role === 'admin' && <AdminChip />}
				</Typography>

				<Typography level="body-lg" sx={{ marginBottom: 1 }}>
					Cuenta creada el:
					<Typography sx={{ marginLeft: 1, fontWeight: 'bold' }}>
						{new Date(data[0]?.createdAt).toLocaleDateString()}
					</Typography>
				</Typography>

				<Typography level="body-lg">
					Posts:
					<Typography sx={{ marginLeft: 1, fontWeight: 'bold' }}>
						{data[0]?.numberOfPosts}
					</Typography>
				</Typography>
			</Box>
		</Stack>
	);
};

export default UserProfilePage;
