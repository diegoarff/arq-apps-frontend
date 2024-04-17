import { useNavigate, useParams } from 'react-router-dom';
import { useUserProfile } from '../hooks/queries/users';
import SpinnerLoader from '../components/loaders/SpinnerLoader';
import { Box, Button, Stack, Typography } from '@mui/joy';
import { ArrowBack } from '@mui/icons-material';

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
			<Typography>UserProfilePage - userId: {userId}</Typography>
			<Typography>{JSON.stringify(data)}</Typography>
		</Stack>
	);
};

export default UserProfilePage;
