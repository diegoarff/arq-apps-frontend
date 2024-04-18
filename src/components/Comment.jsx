import { useState } from 'react';
import { useDeleteCommentMutation } from '../hooks/queries/posts';
import {
	Card,
	Typography,
	Button,
	Modal,
	ModalDialog,
	DialogTitle,
	DialogContent,
	Stack,
	Box,
} from '@mui/joy';
import { Delete } from '@mui/icons-material';
import AdminChip from './chips/AdminChip';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Comment = ({ comment }) => {
	const navigate = useNavigate();
	const user = useAuthStore((state) => state.user);

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const deleteCommentMutation = useDeleteCommentMutation();

	const deleteComment = async () => {
		deleteCommentMutation.mutate(comment._id, {
			onSuccess: () => {
				setIsDeleteModalOpen(false);
			},
		});
	};

	return (
		<>
			<Card
				variant="outlined"
				sx={{
					padding: 2,
					position: 'relative',
				}}
				key={comment._id}
			>
				<Box
					onClick={(e) => {
						e.preventDefault();
						if (user?.id === comment.user.id) {
							navigate(`/users/profile`);
						} else {
							navigate(`/users/${comment.user.id}`);
						}
					}}
					sx={{ cursor: 'pointer' }}
				>
					<Typography level="body-sm">
						Creado por {comment.user.username}{' '}
						{comment.user.role === 'admin' && <AdminChip />} -{' '}
						{new Date(comment.createdAt).toLocaleDateString()}
					</Typography>
				</Box>
				<Typography level="body-md">{comment.content}</Typography>

				{user?.id === comment.user.id && (
					<Button
						variant="plain"
						color="danger"
						sx={{
							position: 'absolute',
							top: 5,
							right: 5,
						}}
						onClick={() => setIsDeleteModalOpen(true)}
					>
						<Delete />
					</Button>
				)}
			</Card>
			<DeleteConfirmationModal
				open={isDeleteModalOpen}
				setOpen={setIsDeleteModalOpen}
				deleteComment={deleteComment}
			/>
		</>
	);
};

const DeleteConfirmationModal = ({ open, setOpen, deleteComment }) => (
	<Modal open={open} onClose={() => setOpen(false)}>
		<ModalDialog>
			<DialogTitle>Eliminar comentario</DialogTitle>
			<DialogContent>
				¿Estás seguro que deseas eliminar este comentario?
			</DialogContent>
			<Stack direction="row" justifyContent="flex-end" gap={2}>
				<Button variant="plain" onClick={() => setOpen(false)}>
					Cancelar
				</Button>
				<Button onClick={deleteComment}>Eliminar</Button>
			</Stack>
		</ModalDialog>
	</Modal>
);

export default Comment;
