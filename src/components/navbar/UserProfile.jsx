import { Button } from '@mui/joy';
import PersonIcon from '@mui/icons-material/Person';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
	const user = useAuthStore((state) => state.user);
	const navigate = useNavigate();

	return (
		<Button
			variant="outlined"
			color="neutral"
			size="md"
			startDecorator={<PersonIcon />}
			onClick={() => navigate('/')}
			sx={{
				'&:hover': {
					backgroundColor: 'background.level2',
				},
			}}
		>
			{user && user.username}
		</Button>
	);
};

export default UserProfile;
