import { useParams } from 'react-router-dom';
import { useSubjectById, useSubjectPosts } from '../hooks/queries/subjects';
import { Box, Button, Grid, Typography } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import Post from '../components/Post';
import CreatePostModal from '../components/CreatePostModal';
import { useState } from 'react';

const SubjectPage = () => {
	const { subjectId } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		data: subject,
		error: subjectError,
		status: subjectStatus,
	} = useSubjectById(subjectId);
	const {
		data: posts,
		error: postsError,
		status: postsStatus,
	} = useSubjectPosts(subjectId);

	if (subjectStatus === 'pending' || postsStatus === 'pending') {
		return <p>Loading...</p>;
	}

	if (subjectStatus === 'error' || postsStatus === 'error') {
		return (
			<>
				{subjectError && <p>Error: {subjectError.message}</p>}
				{postsError && <p>Error: {postsError.message}</p>}
			</>
		);
	}

	return (
		<Box
			sx={{
				height: '100%',
				position: 'relative',
			}}
		>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
				spacing={2}
			>
				<Grid xs={6}>
					<Typography level="h1">{subject.name}</Typography>
				</Grid>

				{posts.length > 0 ? (
					posts.map((post) => (
						<Grid item xs={6} key={post.id}>
							<Post post={post} />
						</Grid>
					))
				) : (
					<Grid item xs={6}>
						<Typography level="body-md">
							Aún no hay publicaciones en esta materia
						</Typography>
					</Grid>
				)}
			</Grid>
			<CreatePostButton setOpen={setIsModalOpen} />
			<CreatePostModal
				open={isModalOpen}
				setOpen={setIsModalOpen}
				subjectId={subjectId}
			/>
		</Box>
	);
};

const CreatePostButton = ({ setOpen }) => {
	return (
		<Button
			variant="soft"
			startDecorator={<AddIcon />}
			sx={{
				position: 'absolute',
				bottom: 0,
				right: 0,
				borderRadius: 16,
				border: '1px solid',
				borderColor: 'primary.outlinedBorder',
				boxShadow: 'md',
				fontWeight: 'md',
			}}
			onClick={() => setOpen(true)}
		>
			<Typography
				level="body-md"
				sx={{
					color: 'text.primary',
				}}
			>
				Crear publicación
			</Typography>
		</Button>
	);
};

export default SubjectPage;
