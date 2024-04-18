import { Card, Typography, Box } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import AdminChip from './chips/AdminChip';
import { useAuthStore } from '../store/useAuthStore';

const Post = ({ post }) => {
	const user = useAuthStore((state) => state.user);
	const navigate = useNavigate();

	return (
		<Link
			to={`/post/${post._id}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
		>
			<Card variant={post.deleted ? 'soft' : 'outlined'} sx={{ padding: 2 }}>
				<Box
					onClick={(e) => {
						e.preventDefault();

						if (user?.id === post.user.id) {
							navigate(`/users/profile`);
						} else {
							navigate(`/users/${post.user.id}`);
						}
					}}
					sx={{ cursor: 'pointer' }}
				>
					<Typography level="body-sm">
						Creado por {post.user.username}{' '}
						{post.user.role === 'admin' && <AdminChip />} -{' '}
						{new Date(post.createdAt).toLocaleDateString()}
					</Typography>
				</Box>

				<Typography level="h4">{post.title}</Typography>
				<Typography level="body-sm">{post.description}</Typography>
			</Card>
		</Link>
	);
};

export default Post;
