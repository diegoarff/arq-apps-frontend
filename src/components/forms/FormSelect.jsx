import { FormControl, FormHelperText, FormLabel, Select } from '@mui/joy';
import { useController } from 'react-hook-form';

const FormSelect = ({
	label,
	control,
	name,
	rules = {},
	placeholder = '',
	defaultValue = '',
	children,
	...props
}) => {
	const {
		field: { value, onChange },
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
				{label}
			</FormLabel>

			<Select
				value={value}
				onChange={(_, value) => onChange(value)}
				placeholder={placeholder}
				defaultValue={''}
				{...props}
			>
				{children}
			</Select>

			<FormHelperText>{error ? error.message : ''}</FormHelperText>
		</FormControl>
	);
};

export default FormSelect;
