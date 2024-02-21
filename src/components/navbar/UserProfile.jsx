import { Button } from '@mui/joy';
import PersonIcon from '@mui/icons-material/Person';

const UserProfile = () => {
	return (
		<>
			<Button
				variant="soft"
				color="primary"
				size="md"
				startDecorator={<PersonIcon />}
			>
				cesar
			</Button>
		</>
	);
};

export default UserProfile;
