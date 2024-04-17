import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useState } from 'react';
import {
	Box,
	Button,
	DialogContent,
	DialogTitle,
	ListDivider,
	Modal,
	ModalDialog,
	ModalClose,
	Stack,
	Typography,
} from '@mui/joy';
import { Logout } from '@mui/icons-material';

const ModalLogout = ({ open, setOpen }) => {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const onLogout = useAuthStore((state) => state.onLogout);

	const handleLogout = () => {
		setLoading(true);
		onLogout();
		navigate('/auth/login', { replace: true });
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog sx={{ width: '40%' }}>
				<ModalClose />
				<DialogTitle sx={{ marginBottom: '10px' }}>Cerrar sesión</DialogTitle>
				<DialogContent mb={1}>
					<Typography>¿Estás seguro que deseas cerrar sesión?</Typography>
				</DialogContent>
				<ListDivider />
				<Stack spacing={2}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							gap: 2,
							alignItems: 'center',
						}}
					>
						<Button
							variant="plain"
							color="danger"
							onClick={() => {
								setOpen(false);
							}}
						>
							Cancelar
						</Button>
						<Button
							disabled={loading}
							loading={loading}
							onClick={handleLogout}
							startDecorator={<Logout />}
						>
							Cerrar sesión
						</Button>
					</Box>
				</Stack>
			</ModalDialog>
		</Modal>
	);
};

export default ModalLogout;
