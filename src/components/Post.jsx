import { Card, Typography } from '@mui/joy';

const Post = ({ post }) => {
	return (
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
	);
};

export default Post;
