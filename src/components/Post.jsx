import { Card, Typography, Button } from '@mui/joy';
import { Link } from 'react-router-dom';
import AdminChip from './chips/AdminChip';

const Post = ({
	user,
	post,

	setIsDeleteModalOpen,
	setSelectedComment,
}) => {
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
					{user?.id === post.user.id && (
						<Button
							variant="plain"
							color="danger"
							sx={{
								position: 'absolute',
								top: 4,
								right: 4,
							}}
							onClick={() => {
								setSelectedComment(post);
								setIsDeleteModalOpen(true);
							}}
						>
							<img
								src="/trashIcon.svg"
								alt="delete"
								style={{ width: '25px' }}
							/>
						</Button>
					)}
				</Typography>

				<Typography level="h4">{post.title}</Typography>
				<Typography level="body-sm">{post.description}</Typography>
			</Card>
		</Link>
	);
};

export default Post;
