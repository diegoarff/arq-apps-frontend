import { useState } from 'react';
import {
	Box,
	Chip,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
	IconButton,
} from '@mui/joy';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useController } from 'react-hook-form';

const InputField = ({
	label,
	control,
	name,
	rules = {},
	placeholder = '',
	type = 'text',
	defaultValue = '',
	isTextarea = false,
	...props
}) => {
	const {
		field: { value, onChange, onBlur },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	});

	const [showPassword, setShowPassword] = useState(type !== 'password');

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<FormControl error={!!error}>
			<FormLabel
				sx={{
					width: '100%',
				}}
			>
				{isTextarea ? (
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						{label}
						{value && (
							<Chip
								variant="plain"
								color="danger"
								size="sm"
								endDecorator={<ClearIcon />}
								onClick={() => {
									onChange({ target: { value: '' } });
								}}
								sx={{
									ml: 'auto',
								}}
							>
								Limpiar
							</Chip>
						)}
					</Box>
				) : (
					<>{label}</>
				)}
			</FormLabel>
			{isTextarea ? (
				<Textarea
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					{...props}
				/>
			) : (
				<Input
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					type={showPassword ? 'text' : type}
					{...props}
					endDecorator={
						type === 'password' && (
							<IconButton onClick={handleTogglePasswordVisibility}>
								{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
							</IconButton>
						)
					}
				/>
			)}
			<FormHelperText>{error ? error.message : ''}</FormHelperText>
		</FormControl>
	);
};

export default InputField;
