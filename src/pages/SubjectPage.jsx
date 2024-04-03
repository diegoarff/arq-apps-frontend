import { useParams } from 'react-router-dom';
import { useSubjectById, useSubjectPosts } from '../hooks/queries/subjects';
import { Box, Button, Grid, Skeleton, Typography } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import Post from '../components/Post';
import CreatePostModal from '../components/CreatePostModal';
import { useState } from 'react';
import SkeletonPosts from '../components/skeletons/SkeletonPosts';
import SidebarProfessor from '../components/layout/SidebarProfessor';

const SubjectPage = () => {
	const { subjectId } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Box
			sx={{
				height: '100%',
				position: 'relative',
			}}
		>
			<Grid
				container
				spacing={2}
				sx={{ flexGrow: 1 }}
				/* container
				direction="row"
				justifyContent="center"
				alignItems="center"
				width="100%"
				spacing={2} */
			>
				<Grid xs={9}>
					<SubjectHeader subjectId={subjectId} />
					<SubjectPosts subjectId={subjectId} />
				</Grid>

				<Grid xs={3}>
					<SidebarProfessor />
				</Grid>
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

const SubjectPosts = ({ subjectId }) => {
	const { data, status } = useSubjectPosts(subjectId);

	if (status === 'pending') {
		return <SkeletonPosts />;
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	return (
		<>
			{data.length > 0 ? (
				data.map((post) => (
					<Grid item xs={6} key={post._id}>
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
		</>
	);
};

const SubjectHeader = ({ subjectId }) => {
	const { data, status } = useSubjectById(subjectId);

	if (status === 'pending') {
		return (
			<Grid xs={6}>
				<Typography
					level="h1"
					sx={{ position: 'relative', overflow: 'hidden' }}
				>
					<Skeleton>Esto es un nombre</Skeleton>
				</Typography>
			</Grid>
		);
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	return (
		<Grid xs={6}>
			<Typography level="h1">{data.name}</Typography>
		</Grid>
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
