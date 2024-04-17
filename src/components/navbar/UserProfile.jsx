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

const UserProfile = () => {
	const [openLogoutModal, setOpenLogoutModal] = useState(false);

	const handleOpenModal = () => {
		setOpenLogoutModal(true);
	};

	const user = useAuthStore((state) => state.user);

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
