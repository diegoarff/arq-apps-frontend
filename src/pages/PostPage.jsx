import { useParams } from 'react-router-dom';
import AdminChip from '../components/chips/AdminChip';
import {
	Card,
	Button,
	Stack,
	Typography,
	Grid,
	Box,
	ListDivider,
	Modal,
	ModalDialog,
	DialogTitle,
	DialogContent,
} from '@mui/joy';

import { useForm } from 'react-hook-form';
import InputField from '../components/forms/InputField';
import Comment from '../components/Comment';
import SkeletonPosts from '../components/skeletons/SkeletonPosts';
import {
	useCreateCommentMutation,
	useDeletePostAsAdminMutation,
	useDeletePostMutation,
	usePostById,
	usePostComments,
} from '../hooks/queries/posts';
import { useNavigate } from 'react-router-dom';
import {
	ArrowBack,
	Delete,
	DeleteForever,
	Send,
	SettingsBackupRestore,
} from '@mui/icons-material';
import { useAuthStore } from '../store/useAuthStore';
import { useState } from 'react';

const PostPage = () => {
	const { postId } = useParams();
	const user = useAuthStore((state) => state.user);
	const { data: post, status: postStatus } = usePostById(postId);
	const { data: comments, status: commentsStatus } = usePostComments(postId);

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isDeleteAdminModalOpen, setIsDeleteAdminModalOpen] = useState(false);

	const { control, handleSubmit, watch, reset } = useForm();
	const content = watch('content');

	const deletePostMutation = useDeletePostMutation(postId);
	const deletePostAsAdminMutation = useDeletePostAsAdminMutation(postId);
	const createCommentMutation = useCreateCommentMutation();

	const createComment = async (data) => {
		createCommentMutation.mutate(
			{ postId, ...data },
			{
				onSuccess: () => {
					reset();
				},
			}
		);
	};

	const navigate = useNavigate();

	if (postStatus === 'pending' || commentsStatus === 'pending') {
		return <SkeletonPosts skeletonLength={1} />;
	}

	if (postStatus === 'error' || commentsStatus === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	return (
		<>
			<Grid container spacing={4}>
				<Grid xs={9}>
					<Stack direction="row" justifyContent="space-between">
						<Box>
							<Button
								color="primary"
								onClick={() => navigate(-1)}
								startDecorator={<ArrowBack />}
							>
								Volver
							</Button>
						</Box>

						<Stack direction="row" gap={2}>
							{user?.id === post.user.id && (
								<Button
									variant="plain"
									color="danger"
									onClick={() => setIsDeleteModalOpen(true)}
									startDecorator={<Delete />}
								>
									Eliminar post
								</Button>
							)}

							{user?.role === 'admin' && (
								<Button
									variant="outlined"
									color="danger"
									onClick={() => setIsDeleteAdminModalOpen(true)}
									startDecorator={
										post.deleted ? <SettingsBackupRestore /> : <DeleteForever />
									}
								>
									{post.deleted ? 'Restaurar post' : 'Eliminar como admin'}
								</Button>
							)}
						</Stack>
					</Stack>
				</Grid>
				<Grid xs={9}>
					<Stack sx={{ gap: 2 }}>
						{post.deleted && (
							<Card variant="soft">
								<Typography level="body-md">
									Esta post ha sido eliminado por un administrador. Los usuarios
									no pueden verlo.
								</Typography>
							</Card>
						)}

						<Box
							onClick={() => navigate(`/users/${post.user.id}`)}
							sx={{ cursor: 'pointer' }}
						>
							<Typography level="body-sm">
								Creado por {post.user.username}{' '}
								{post.user.role === 'admin' && <AdminChip />} -{' '}
								{new Date(post.createdAt).toLocaleDateString()}
							</Typography>
						</Box>

						<Typography level="h3">{post.title}</Typography>
						<Typography level="body-lg">{post.description}</Typography>

						<ListDivider />
						<Typography level="title-lg">
							Comentarios ({comments.length})
						</Typography>
						<form onSubmit={handleSubmit(createComment)}>
							<Stack direction="row" spacing={1} alignItems="center">
								<Box flexGrow={1}>
									<InputField
										name="content"
										control={control}
										required
										placeholder="Escribe un comentario..."
									/>
								</Box>
								<Button
									type="submit"
									disabled={content?.length === 0}
									loading={createCommentMutation.isPending}
								>
									<Send />
								</Button>
							</Stack>
						</form>

						{comments.length > 0 ? (
							comments.map((comment) => (
								<Comment key={comment._id} comment={comment} />
							))
						) : (
							<Card
								variant="outlined"
								sx={{
									padding: 2,
								}}
							>
								<Typography level="body-md">
									Aún no hay comentarios en esta publicación
								</Typography>
							</Card>
						)}
					</Stack>
				</Grid>
			</Grid>
			<DeleteConfirmationModal
				open={isDeleteModalOpen}
				setOpen={setIsDeleteModalOpen}
				mutation={deletePostMutation}
			/>
			<DeleteAdminConfirmationModal
				open={isDeleteAdminModalOpen}
				setOpen={setIsDeleteAdminModalOpen}
				mutation={deletePostAsAdminMutation}
				isDeleted={post.deleted}
			/>
		</>
	);
};

const DeleteConfirmationModal = ({ open, setOpen, mutation }) => {
	const navigate = useNavigate();
	const deletePost = () => {
		mutation.mutate();
		setOpen(false);
		navigate(-1);
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog>
				<DialogTitle>Eliminar post</DialogTitle>
				<DialogContent>
					¿Estás seguro que deseas eliminar este post?
				</DialogContent>
				<Stack direction="row" justifyContent="flex-end" gap={2}>
					<Button variant="plain" onClick={() => setOpen(false)}>
						Cancelar
					</Button>
					<Button
						loading={mutation.isPending}
						disabled={mutation.isPending}
						onClick={deletePost}
					>
						Eliminar
					</Button>
				</Stack>
			</ModalDialog>
		</Modal>
	);
};

const DeleteAdminConfirmationModal = ({
	open,
	setOpen,
	mutation,
	isDeleted,
}) => {
	const handlePost = () => {
		mutation.mutate();
		setOpen(false);
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog>
				<DialogTitle>
					{isDeleted ? 'Restaurar post' : 'Eliminar post como admin'}
				</DialogTitle>
				<DialogContent>
					{isDeleted
						? 'Esta acción regreserá el post a la vista de los usuarios'
						: 'Esta acción hará que el resto de usuarios no puedan ver este post'}
				</DialogContent>
				<Stack direction="row" justifyContent="flex-end" gap={2}>
					<Button variant="plain" onClick={() => setOpen(false)}>
						Cancelar
					</Button>
					<Button
						loading={mutation.isPending}
						disabled={mutation.isPending}
						onClick={handlePost}
					>
						{isDeleted ? 'Restaurar' : 'Eliminar'}
					</Button>
				</Stack>
			</ModalDialog>
		</Modal>
	);
};

export default PostPage;
