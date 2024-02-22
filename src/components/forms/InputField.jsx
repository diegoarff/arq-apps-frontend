import {
	Box,
	Chip,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
} from '@mui/joy';
import ClearIcon from '@mui/icons-material/Clear';
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
					type={type}
					{...props}
				/>
			)}
			<FormHelperText>{error ? error.message : ''}</FormHelperText>
		</FormControl>
	);
};

export default InputField;
