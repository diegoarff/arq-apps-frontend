import { Button, Stack } from '@mui/joy';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputField from './InputField';

const RegisterForm = () => {
	const navigate = useNavigate();
	const onRegister = useAuthStore((state) => state.onRegister);
	const { control, handleSubmit, watch } = useForm();
	const password = watch('password');

	const submitHandler = async (data) => {
		await onRegister(data.username, data.password);
		navigate('/auth/login', { replace: true });
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<Stack gap={2}>
				<InputField
					label="Usuario"
					name="username"
					control={control}
					rules={{
						required: 'Usuario es requerido',
						minLength: {
							value: 3,
							message: 'Usuario debe tener al menos 3 caracteres',
						},
					}}
				/>
				<InputField
					label="Contraseña"
					name="password"
					type="password"
					control={control}
					rules={{
						required: 'Contraseña es requerida',
						minLength: {
							value: 8,
							message: 'Contraseña debe tener al menos 8 caracteres',
						},
						pattern: {
							value: /^(?=.*[A-Z])(?=.*\d).+$/,
							message:
								'Contraseña debe tener al menos 1 letra mayúscula y 1 número',
						},
					}}
				/>
				<InputField
					label="Confirmar contraseña"
					name="confirmPassword"
					type="password"
					control={control}
					rules={{
						required: 'Confirmar contraseña es requerido',
						validate: (value) =>
							value === password || 'Las contraseñas no coinciden',
					}}
				/>

				<Button type="submit">Registrarse</Button>
			</Stack>
		</form>
	);
};

export default RegisterForm;
