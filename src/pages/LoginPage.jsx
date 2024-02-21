import { Box, Card, CardContent, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
	return (
		<Box
			sx={{
				height: '100dvh',
				display: 'grid',
				placeItems: 'center',
			}}
		>
			<Card variant="outlined">
				<Box p={2}>
				<img
						src="../../public/Logo.png"
						alt="CodeCampus"
						sx={{
							width: 100, 
							marginBottom: 2, 
						}}
					/>
					<Typography level="title-lg">Inicio de sesión</Typography>
					<Typography
						level="body-md"
						sx={{
							marginBottom: 2,
						}}
					>
						Inicia sesión para usar nuestra aplicación
					</Typography>
					<CardContent
						sx={{
							marginBottom: 2,
						}}
					>
						<LoginForm />
					</CardContent>
					<Link to="/register">
						<Typography level="body-md">
							¿No tienes cuenta? Regístrate
						</Typography>
					</Link>
				</Box>
			</Card>
		</Box>
	);
};

export default LoginPage;
