import {
	Dropdown,
	MenuButton,
	Menu,
	MenuItem,
	ListDivider,
	Typography,
} from '@mui/joy';
import {
	Person,
	AssignmentInd,
	ManageAccounts,
	Logout,
} from '@mui/icons-material';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
	const user = useAuthStore((state) => state.user);
	const onLogout = useAuthStore((state) => state.onLogout);
	const navigate = useNavigate();

	return (
		<>
			<Dropdown>
				<MenuButton startDecorator={<Person />}>
					{user && user.username}
				</MenuButton>
				<Menu>
					<MenuItem>
						<AssignmentInd />
						<Typography>Perfil</Typography>
					</MenuItem>
					<MenuItem>
						<ManageAccounts />
						<Typography>Panel de administrador</Typography>
					</MenuItem>
					<ListDivider />
					<MenuItem
						onClick={() => {
							onLogout();
							navigate('/auth/login', { replace: true });
						}}
					>
						<Logout />
						<Typography>Cerrar sesión</Typography>
					</MenuItem>
				</Menu>
			</Dropdown>
		</>
	);
};

export default UserProfile;
