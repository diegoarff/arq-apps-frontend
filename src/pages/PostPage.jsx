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
} from '@mui/joy';

import { useForm } from 'react-hook-form';
import InputField from '../components/forms/InputField';
import Comment from '../components/Comment';
import SkeletonPosts from '../components/skeletons/SkeletonPosts';
import {
	useCreateCommentMutation,
	usePostById,
	usePostComments,
} from '../hooks/queries/posts';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, Send } from '@mui/icons-material';

const PostPage = () => {
	const { postId } = useParams();
	const { data: post, status: postStatus } = usePostById(postId);
	const { data: comments, status: commentsStatus } = usePostComments(postId);

	const { control, handleSubmit, watch, reset } = useForm();
	const content = watch('content');

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
		<Grid container spacing={4}>
			<Grid xs={12}>
				<Button
					color="primary"
					onClick={() => navigate(-1)}
					startDecorator={<ArrowBack />}
				>
					Volver
				</Button>
			</Grid>
			<Grid xs={9}>
				<Stack sx={{ gap: 2 }}>
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
								<InputField name="content" control={control} required />
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
	);
};

export default PostPage;
