import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import { useController } from 'react-hook-form';

const InputField = ({
	label,
	control,
	name,
	rules = {},
	placeholder = '',
	type = 'text',
	defaultValue = '',
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
					fontWeight: 'bold',
				}}
			>
				{label}
			</FormLabel>
			<Input
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <FormHelperText>{error.message}</FormHelperText>}
		</FormControl>
	);
};

export default InputField;
