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
} from '@mui/joy';
import AdminChip from './chips/AdminChip';

const Comment = ({ comment, user }) => {
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
				<Typography level="body-sm">
					Creado por {comment.user.username}{' '}
					{comment.user.role === 'admin' && <AdminChip />}-{' '}
					{new Date(comment.createdAt).toLocaleDateString()}
				</Typography>
				<Typography level="body1">{comment.content}</Typography>
				{user?.id === comment.user.id && (
					<Button
						variant="plain"
						color="danger"
						sx={{
							position: 'absolute',
							top: 4,
							right: 4,
						}}
						onClick={() => setIsDeleteModalOpen(true)}
					>
						<img src="/trashIcon.svg" alt="delete" style={{ width: '25px' }} />
					</Button>
				)}
				{user?.role === 'admin' && (
					<Button
						variant="plain"
						color="warning"
						sx={{
							position: 'absolute',
							top: 45,
							right: 4,
						}}
						onClick={() => setIsDeleteModalOpen(true)}
					>
						<img
							src="/alertIcon.svg"
							alt="delete"
							style={{ width: '15px', margin: '5px' }}
						/>
						Eliminar como Admin
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
