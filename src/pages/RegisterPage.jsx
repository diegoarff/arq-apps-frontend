import { Box, Card, CardContent, Typography } from '@mui/joy';
import RegisterForm from '../components/forms/RegisterForm';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import Logo from '../components/Logo';

const RegisterPage = () => {
	return (
		<Box
			sx={{
				height: '100dvh',
				display: 'grid',
				placeItems: 'center',
				backgroundColor: 'background.level1',
			}}
		>
			<Card
				variant="outlined"
				sx={{
					width: '30%',
					minWidth: 300,
				}}
			>
				<Box
					p={2}
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}
					gap={1}
				>
					<Logo />
					<Typography level="h2">Registro</Typography>
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
							width: '100%',
						}}
					>
						<RegisterForm />
					</CardContent>

					<Typography level="body-md">
						¿Ya tienes una cuenta?{' '}
						<Link to="/auth/login">
							<Typography level="body-md" color="primary">
								Inicia sesión
							</Typography>
						</Link>
					</Typography>
				</Box>
			</Card>
			<Box
				sx={{
					position: 'absolute',
					top: 16,
					right: 16,
				}}
			>
				<ThemeToggle />
			</Box>
		</Box>
	);
};

export default RegisterPage;
