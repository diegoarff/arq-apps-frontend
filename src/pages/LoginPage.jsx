import { Box, Card, CardContent, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import ThemeToggle from '../components/ThemeToggle';
import LogoSvg from '../components/LogoSvg';

const LoginPage = () => {
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
					<LogoSvg />
					<Typography level="h2">Inicio de sesión</Typography>
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
							width: '100%',
						}}
					>
						<LoginForm />
					</CardContent>
					<Typography level="body-md">
						¿No tienes cuenta?{' '}
						<Link to="/auth/register">
							<Typography level="body-md" color="primary">
								Regístrate
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

export default LoginPage;
