import { Card, Typography, Button, Box } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import AdminChip from './chips/AdminChip';
import { useAuthStore } from '../store/useAuthStore';
import { Delete } from '@mui/icons-material';

const Post = ({ post, setIsDeleteModalOpen, setSelectedComment }) => {
	const navigate = useNavigate();
	const user = useAuthStore((state) => state.user);

	return (
		<Link
			to={`/post/${post._id}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
		>
			<Card variant={post.deleted ? 'soft' : 'outlined'} sx={{ padding: 2 }}>
				<Box
					onClick={(e) => {
						e.preventDefault();
						navigate(`/users/${post.user.id}`);
					}}
					sx={{ cursor: 'pointer' }}
				>
					<Typography level="body-sm">
						Creado por {post.user.username}{' '}
						{post.user.role === 'admin' && <AdminChip />} -{' '}
						{new Date(post.createdAt).toLocaleDateString()}
					</Typography>
				</Box>

				{user?.id === post.user.id && (
					<Button
						variant="plain"
						color="danger"
						sx={{
							position: 'absolute',
							top: 5,
							right: 5,
						}}
						onClick={() => {
							setSelectedComment(post);
							setIsDeleteModalOpen(true);
						}}
					>
						<Delete />
					</Button>
				)}

				<Typography level="h4">{post.title}</Typography>
				<Typography level="body-sm">{post.description}</Typography>
			</Card>
		</Link>
	);
};

export default Post;
