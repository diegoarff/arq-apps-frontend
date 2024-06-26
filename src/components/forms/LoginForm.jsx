import { Button, Stack } from '@mui/joy';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import { useGlobalStore } from '../../store/useGlobalStore';
import { useState } from 'react';

const LoginForm = () => {
	const navigate = useNavigate();
	const onLogin = useAuthStore((state) => state.onLogin);
	const openSnackbar = useGlobalStore((state) => state.openSnackbar);

	const [loading, setLoading] = useState(false);

	const { control, handleSubmit } = useForm();

	const submitHandler = async (data) => {
		try {
			setLoading(true);
			await onLogin(data);
			openSnackbar('Sesión iniciada', 'neutral');
			navigate('/', { replace: true });
		} catch (error) {
			openSnackbar(error, 'danger');
			console.error(error.message);
			if (error.message.includes('banned')) {
				navigate('/banned');
			}
		} finally {
			setLoading(false);
		}
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
				<Button type="submit" disabled={loading} loading={loading}>
					Iniciar sesión
				</Button>
			</Stack>
		</form>
	);
};

export default LoginForm;
