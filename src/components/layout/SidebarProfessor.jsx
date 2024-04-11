import { Button, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import CreateProfesorModal from '../modals/ModalProfessor';
import { useTeachersBySubject } from '../../hooks/queries/teachers';
import SidebarSkeleton from '../skeletons/SkeletonSidebar';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const SidebarProfessor = () => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedTeacher, setSelectedTeacher] = useState(null);
	return (
		<Stack
			gap={2}
			sx={{
				backgroundColor: 'background.level1',
				padding: 2,
				border: '1px solid',
				borderColor: 'divider',
				borderRadius: '15px',
				height: 'calc(85vh - 64px)',
			}}
		>
			<SidebarProfessorData
				setOpenModal={setOpenModal}
				setTeacher={setSelectedTeacher}
			/>
			<CreateProfesorModal
				open={openModal}
				setOpen={setOpenModal}
				teacher={selectedTeacher}
			/>
		</Stack>
	);
};

const SidebarProfessorData = ({ setOpenModal, setTeacher }) => {
	const { subjectId } = useParams();
	const { data, status } = useTeachersBySubject(subjectId);

	const handleTeacherClick = (teacher) => {
		setTeacher(teacher);
		setOpenModal(true);
	};

	if (status === 'pending') {
		return <SidebarSkeleton />;
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	return (
		<Stack direction="column" gap={1}>
			<Typography
				level="body-sm"
				fontWeight="lg"
				sx={{ color: 'text.terciary' }}
			>
				Profesor(es)
			</Typography>

			<Stack gap={0.5}>
				{data.map((teacher, idx) => (
					<Button
						variant="plain"
						key={idx}
						onClick={() => handleTeacherClick(teacher)}
						sx={{
							py: 1,
							'&:hover': {
								backgroundColor: 'background.level2',
							},
							transition: 'all 0.2s ease-in-out',
						}}
					>
						<SidebarProfessorItem teacher={teacher} />
					</Button>
				))}
			</Stack>
		</Stack>
	);
};

const SidebarProfessorItem = ({ teacher }) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			flex={1}
		>
			<Typography level="body-md">{teacher.name}</Typography>
			<Stack direction="row" alignItems="center">
				<Typography level="body-md">
					{parseFloat(teacher.averageRating).toFixed(1)}
				</Typography>
				<StarIcon />
			</Stack>
		</Stack>
	);
};

export default SidebarProfessor;
