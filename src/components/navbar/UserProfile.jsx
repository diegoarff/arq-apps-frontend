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
import { useState } from 'react';
import ModalLogout from '../modals/ModalLogout';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
	const [openLogoutModal, setOpenLogoutModal] = useState(false);

	const handleOpenModal = () => {
		setOpenLogoutModal(true);
	};

	const user = useAuthStore((state) => state.user);
	const navigate = useNavigate();

	return (
		<>
			<Dropdown>
				<MenuButton startDecorator={<Person />}>
					{user && user.username}
				</MenuButton>
				<Menu>
					<MenuItem onClick={() => navigate('/users/profile')}>
						<AssignmentInd />
						<Typography>Perfil</Typography>
					</MenuItem>

					{user && user.role === 'admin' && (
						<MenuItem>
							<ManageAccounts />
							<Typography>Panel de administrador</Typography>
						</MenuItem>
					)}
					<ListDivider />
					<MenuItem onClick={handleOpenModal}>
						<Logout />
						<Typography>Cerrar sesión</Typography>
					</MenuItem>
				</Menu>
			</Dropdown>
			<ModalLogout open={openLogoutModal} setOpen={setOpenLogoutModal} />
		</>
	);
};

export default UserProfile;
