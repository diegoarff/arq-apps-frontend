import { Button, Option, Stack } from '@mui/joy';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import { useUniversities } from '../../hooks/queries/universities';
import FormSelect from './FormSelect';
import { useGlobalStore } from '../../store/useGlobalStore';
import { useState } from 'react';

const RegisterForm = () => {
	const navigate = useNavigate();
	const onRegister = useAuthStore((state) => state.onRegister);
	const openSnackbar = useGlobalStore((state) => state.openSnackbar);
	const { control, handleSubmit, watch } = useForm();
	const password = watch('password');

	const [loading, setLoading] = useState(false);

	const { data: universities, isPending } = useUniversities();

	const submitHandler = async (data) => {
		try {
			setLoading(true);
			await onRegister(data);
			openSnackbar('Cuenta creada exitosamente', 'neutral');
			navigate('/auth/login', { replace: true });
		} catch (error) {
			openSnackbar(error, 'danger');
			console.error(error);
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

				<FormSelect
					label="Universidad"
					control={control}
					name="university"
					rules={{
						required: 'Universidad es requerida',
					}}
					disabled={isPending}
				>
					{universities &&
						universities.map((university) => (
							<Option key={university.id} value={university.id}>
								{university.name}
							</Option>
						))}
				</FormSelect>

				<Button type="submit" loading={loading} disabled={isPending || loading}>
					Registrarse
				</Button>
			</Stack>
		</form>
	);
};

export default RegisterForm;
