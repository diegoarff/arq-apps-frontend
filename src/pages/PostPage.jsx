import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Card,
	Button,
	DialogContent,
	DialogTitle,
	Modal,
	ModalDialog,
	Stack,
	Typography,
	Grid,
	Box,
} from '@mui/joy';

import { useForm } from 'react-hook-form';
import InputField from '../components/forms/InputField';

// import CreateCommentModal from '../components/CreateCommentModal';
import SkeletonPosts from '../components/skeletons/SkeletonPosts';
import {
	useCreateCommentMutation,
	useDeleteCommentMutation,
	usePostById,
	usePostComments,
} from '../hooks/queries/posts';
import { useAuthStore } from '../store/useAuthStore';

const PostPage = () => {
	const { postId } = useParams();
	const user = useAuthStore((state) => state.user);
	const { data: post, status: postStatus } = usePostById(postId);
	const { data: comments, status: commentsStatus } = usePostComments(postId);

	// const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [selectedComment, setSelectedComment] = useState(null);

	const { control, handleSubmit, watch, reset } = useForm();
	const content = watch('content');

	const createCommentMutation = useCreateCommentMutation();

	const createComment = async (data) => {
		createCommentMutation.mutate(
			{ postId, ...data },
			{
				onSuccess: () => {
					// setIsModalOpen(false);
					reset();
				},
			}
		);
	};

	if (postStatus === 'pending' || commentsStatus === 'pending') {
		return <SkeletonPosts skeletonLength={1} />;
	}

	if (postStatus === 'error' || commentsStatus === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	return (
		<Grid container spacing={4}>
			<Grid xs={9}>
				<Stack sx={{ gap: 2 }}>
					<Card
						variant="outlined"
						sx={{
							padding: 2,
						}}
					>
						<Typography level="body-sm">
							Creado por {post.user.username} -{' '}
							{new Date(post.createdAt).toLocaleDateString()}
						</Typography>

						<Typography level="h4">{post.title}</Typography>
						<Typography level="body-sm">{post.description}</Typography>
					</Card>

					{/* <Button
						sx={{
							width: '100%',
						}}
						onClick={() => setIsModalOpen(true)}
					>
						Publicar comentario
					</Button>
					<CreateCommentModal
						open={isModalOpen}
						setOpen={setIsModalOpen}
						postId={postId}
					/> */}
					<DeleteConfirmationModal
						open={isDeleteModalOpen}
						setOpen={setIsDeleteModalOpen}
						commentId={selectedComment?._id}
					/>

					<Typography variant="h3">Comentarios</Typography>

					<form onSubmit={handleSubmit(createComment)}>
						<Stack direction="row" spacing={1} alignItems="center">
							<Box flexGrow={1}>
								<InputField
									name="content"
									// label="Comentario"
									// isTextarea
									control={control}
									required
								/>
							</Box>
							<Button
								type="submit"
								disabled={content?.length === 0}
								loading={createCommentMutation.isPending}
							>
								<img src="/sendIcon.svg" alt="send" style={{ width: '25px' }} />
							</Button>
						</Stack>
					</form>

					{comments.length > 0 ? (
						comments.map((comment) => (
							<Card
								variant="outlined"
								sx={{
									padding: 2,
									position: 'relative',
								}}
								key={comment._id}
							>
								<Typography level="body-sm">
									Creado por {comment.user.username} -{' '}
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
										onClick={() => {
											setSelectedComment(comment);
											setIsDeleteModalOpen(true);
										}}
									>
										Eliminar
									</Button>
								)}
							</Card>
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
	);
};

export default PostPage;

const DeleteConfirmationModal = ({ open, setOpen, commentId }) => {
	const deleteCommentMutation = useDeleteCommentMutation();

	const deleteComment = async () => {
		deleteCommentMutation.mutate(commentId, {
			onSuccess: () => {
				setOpen(false);
			},
		});
	};

	return (
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
					<Button
						onClick={deleteComment}
						loading={deleteCommentMutation.isPending}
					>
						Eliminar
					</Button>
				</Stack>
			</ModalDialog>
		</Modal>
	);
};
