import { Button, FormControl, Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
	return (
		<>
			<FormControl>
				<Input
					placeholder="Buscar..."
					type="search"
					endDecorator={
						<Button variant="plain" color="neutral">
							<SearchIcon />
						</Button>
					}
				/>
			</FormControl>
		</>
	);
};

export default Searchbar;
