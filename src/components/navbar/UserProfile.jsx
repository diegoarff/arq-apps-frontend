import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/joy';
import PersonIcon from '@mui/icons-material/Person';
import { useAuthStore } from '../../store/useAuthStore';
//import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
	const user = useAuthStore((state) => state.user);
	//const navigate = useNavigate();

	return (
		<>
			<Dropdown>
				<MenuButton startDecorator={<PersonIcon />}>
					{user && user.username}
				</MenuButton>
				<Menu>
					<MenuItem>Perfil</MenuItem>
					<MenuItem>Panel</MenuItem>
					<MenuItem>Cerrar sesión</MenuItem>
				</Menu>
			</Dropdown>
		</>
	);
};

export default UserProfile;
