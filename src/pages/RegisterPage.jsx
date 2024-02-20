import { Box, Card, CardContent, Typography } from '@mui/joy';
import RegisterForm from '../components/forms/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
					<Typography level="title-lg">Registro</Typography>
					<Typography
						level="body-md"
						sx={{
							marginBottom: 2,
						}}
					>
						Regístrate para usar nuestra aplicación
					</Typography>
					<CardContent
						sx={{
							marginBottom: 2,
						}}
					>
						<RegisterForm />
					</CardContent>
					<Link to="/login">
						<Typography level="body-md">
							¿Ya tienes una cuenta? Ve a iniciar sesión
						</Typography>
					</Link>
				</Box>
			</Card>
		</Box>
	);
};

export default RegisterPage;
