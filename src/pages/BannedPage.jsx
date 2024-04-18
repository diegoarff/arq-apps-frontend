import { Box, Button, Stack, Typography } from '@mui/joy';
import CountrySelect from '../components/CountrySelect';
import ThemeToggle from '../components/ThemeToggle';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BannedPage = () => {
	const onLogout = useAuthStore((state) => state.onLogout);
	const navigate = useNavigate();

	useEffect(() => {
		onLogout();
		// eslint-disable-next-line
	}, []);

	return (
		<Stack
			sx={{
				height: '100dvh',
				backgroundColor: 'background.surface',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
			}}
		>
			<Typography level="h1">
				¡Lo sentimos! Tu cuenta ha sido baneada.
			</Typography>
			<Typography level="body-lg">
				Contacta con soporte (no hay) para más información. Y la próxima te
				portai bien carajito er diablo.
			</Typography>

			<Button onClick={() => navigate('/')}>Ir a página inicial</Button>

			<Stack>
				<Typography level="body-lg">⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄</Typography>
				<Typography level="body-lg">⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄</Typography>
				<Typography level="body-lg">⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄</Typography>
				<Typography level="body-lg">⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄</Typography>
				<Typography level="body-lg">⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰</Typography>
				<Typography level="body-lg">⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤</Typography>
				<Typography level="body-lg">⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗</Typography>
				<Typography level="body-lg">⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄</Typography>
				<Typography level="body-lg">⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄</Typography>
				<Typography level="body-lg">⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄</Typography>
				<Typography level="body-lg">⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄</Typography>
				<Typography level="body-lg">⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄</Typography>
				<Typography level="body-lg">⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄</Typography>
				<Typography level="body-lg">⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴</Typography>
				<Typography level="body-lg">⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿</Typography>
			</Stack>
			<Box
				sx={{
					display: 'flex',
					gap: 2,
					position: 'absolute',
					top: 16,
					right: 16,
				}}
			>
				<CountrySelect />
				<ThemeToggle />
			</Box>
		</Stack>
	);
};

export default BannedPage;
