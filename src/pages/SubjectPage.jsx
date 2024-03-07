import { json, useParams } from 'react-router-dom';
import { useSubjectById, useSubjectPosts } from '../hooks/queries/subjects';
import { Box, Button, Grid, Typography } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import Post from '../components/Post';
import CreatePostModal from '../components/CreatePostModal';
import { useState } from 'react';
import SkeletonSubjectPage from '../components/skeletons/SkeletonSubjectPage';

const SubjectPage = () => {
	const { subjectId } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data: posts, status } = useSubjectPosts(subjectId);

	if (status === 'pending') {
		return <SkeletonSubjectPage />;
	}

	if (status === 'error') {
		throw new json({ message: `Failed to fetch data` }, { status: 500 });
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
					<SubjectPageHeader subjectId={subjectId} />
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

const SubjectPageHeader = ({ subjectId }) => {
	const { data, status } = useSubjectById(subjectId);

	if (status === 'pending') {
		return <Typography>Loading...</Typography>;
	}

	if (status === 'error') {
		throw new json({ message: `Failed to fetch data` }, { status: 500 });
	}

	return <Typography level="h1">{data.name}</Typography>;
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
