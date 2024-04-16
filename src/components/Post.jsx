import { Card, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import AdminChip from './chips/AdminChip';

const Post = ({ post }) => {
	return (
		<Link
			to={`/post/${post._id}`}
			style={{ textDecoration: 'none', color: 'inherit' }}
		>
			<Card variant="outlined" sx={{ padding: 2 }}>
				<Typography level="body-sm">
					Creado por {post.user.username}{' '}
					{post.user.role === 'admin' && <AdminChip />} -{' '}
					{new Date(post.createdAt).toLocaleDateString()}
				</Typography>

				<Typography level="h4">{post.title}</Typography>
				<Typography level="body-sm">{post.description}</Typography>
			</Card>
		</Link>
	);
};

export default Post;
