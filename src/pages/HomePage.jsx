import { Box, Typography } from '@mui/joy';
import { useAuthStore } from '../store/useAuthStore';

const HomePage = () => {
	const { user } = useAuthStore();

	return (
		<Box
			sx={{
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 4,
			}}
		>
			<Typography level="h1">Bienvenido, {user.username}</Typography>
			<Typography level="body-lg">Selecciona una materia</Typography>
		</Box>
	);
};

export default HomePage;
