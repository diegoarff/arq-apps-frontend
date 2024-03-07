import { Box, Button, Typography } from '@mui/joy';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate('/');
	};

	const handleRetry = () => {
		window.location.reload();
	};
	return (
		<Box
			sx={{
				height: '100dvh',
				backgroundColor: 'background.surface',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
			}}
		>
			<Typography level="h1">Vaya, parece que hay un error...</Typography>
			<Typography level="body-md">
				No se pudo cargar la página. Por favor, intenta de nuevo más tarde.
			</Typography>
			<Typography level="body-md">
				{error.status === 404 ? error.data : error.message}
			</Typography>
			{error.status === 404 ? (
				<Button onClick={handleGoHome}>Ir a la página principal</Button>
			) : (
				<Button onClick={handleRetry}>Retry</Button>
			)}
		</Box>
	);
};

export default ErrorPage;
