import { Card, Typography, Button } from '@mui/joy';

const Comment = ({
	comment,
	user,
	setIsDeleteModalOpen,
	setSelectedComment,
}) => (
	<Card
		variant="outlined"
		sx={{
			padding: 2,
			position: 'relative',
		}}
		key={comment._id}
	>
		<Typography level="body-sm">
			Creado por {comment.user.id} -{' '}
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
				<img src="/trashIcon.svg" alt="delete" style={{ width: '25px' }} />
			</Button>
		)}
	</Card>
);

export default Comment;
