import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { useAuthStore } from '../store/useAuthStore';

const RegisterForm = () => {
	const onRegister = useAuthStore((state) => state.onRegister);

	//TODO: COMPONENTIZAR EL FORMULARIO DE REGISTRO

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const formElements = e.currentTarget.elements;
				console.log(formElements);

				const username = formElements.username.value;
				const password = formElements.password.value;

				await onRegister(username, password);
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
				<FormControl>
					<FormLabel
						sx={{
							fontWeight: 'bold',
						}}
					>
						Confirmar contraseña
					</FormLabel>
					<Input placeholder="Escribe aquí..." name="confirm-password" />
				</FormControl>
				<Button type="submit">Registrarse</Button>
			</Stack>
		</form>
	);
};

export default RegisterForm;
