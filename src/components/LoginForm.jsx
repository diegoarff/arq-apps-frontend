import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const navigate = useNavigate();
	const onLogin = useAuthStore((state) => state.onLogin);

	//TODO: COMPONENTIZAR EL FORMULARIO DE INICIO DE SESIÓN

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const formElements = e.currentTarget.elements;

				const username = formElements.username.value;
				const password = formElements.password.value;

				await onLogin(username, password);

				navigate('/');
			}}
		>
			<Stack gap={2}>
				<FormControl>
					<FormLabel
						sx={{
							fontWeight: 'bold',
						}}
					>
						Usuario
					</FormLabel>
					<Input placeholder="Escribe aquí..." name="username" />
				</FormControl>
				<FormControl>
					<FormLabel
						sx={{
							fontWeight: 'bold',
						}}
					>
						Contraseña
					</FormLabel>
					<Input placeholder="Escribe aquí..." name="password" />
				</FormControl>
				<Button type="submit">Iniciar sesión</Button>
			</Stack>
		</form>
	);
};

export default LoginForm;
