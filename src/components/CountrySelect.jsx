import { Select, Option } from '@mui/joy';

const CountrySelect = () => {
	const currentUrl = window.location.href.split('/')[2];

	const options = [
		{
			label: 'Venezuela',
			value: 'arq-apps-frontend-es.vercel.app',
			country: 've',
		},
		{
			label: 'Estados Unidos',
			value: 'arq-apps-frontend-en.vercel.app',
			country: 'us',
		},
		{
			label: 'Francia',
			value: 'arq-apps-frontend-fr.vercel.app',
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
