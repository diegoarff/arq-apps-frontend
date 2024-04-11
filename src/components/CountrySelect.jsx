import { Select, Option } from '@mui/joy';

const CountrySelect = () => {
	const currentUrl = window.location.origin;

	const options = [
		{
			label: 'Venezuela',
			value: 'https://arq-apps-frontend-es.vercel.app',
			country: 've',
		},
		{
			label: 'Estados Unidos',
			value: 'https://arq-apps-frontend-en.vercel.app',
			country: 'us',
		},
		{
			label: 'Francia',
			value: 'https://arq-apps-frontend-fr.vercel.app',
			country: 'fr',
		},
	];

	return (
		<Select label="País" defaultValue={currentUrl}>
			{options.map((option, index) => (
				<Option
					key={index}
					value={option.value}
					onClick={() => {
						window.location.href = option.value;
					}}
				>
					{option.label}
				</Option>
			))}
		</Select>
	);
};

export default CountrySelect;
