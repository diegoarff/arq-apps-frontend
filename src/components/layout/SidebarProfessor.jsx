import { Button, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import CreateProfesorModal from '../modals/ModalProfessor';
/* import { useAuthStore } from '../../store/useAuthStore';
import { useTeachersBySubject } from '../../hooks/queries/teachers';
import SidebarSkeleton from '../skeletons/SkeletonSidebar'; */

const SidebarProfessor = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<Stack
			gap={2}
			sx={{
				backgroundColor: 'background.level1',
				padding: 2,
				border: '1px solid',
				borderColor: 'divider',
				borderRadius: '15px',
				height: 'calc(80vh - 64px)',
				width: 300,
			}}
		>
			<SidebarProfessorData setOpenModal={setOpenModal} />
			<CreateProfesorModal open={openModal} setOpen={setOpenModal} />
		</Stack>
	);
};

const SidebarProfessorData = ({ setOpenModal }) => {
	/* const user = useAuthStore((state) => state.user);

	const { data, status } = useTeachersBySubject(user.subject.id);

	if (status === 'pending') {
		return <SidebarSkeleton />;
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	console.log(data); */

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
				{/* {data.map ((teacher, id) => (
					<Button variant="plain" key={id}>
						<SidebarProfessorItem setOpenModal={setOpenModal} teacher={teacher} />
					</Button>
				))} */}
				<Button variant="plain">
					<SidebarProfessorItem setOpenModal={setOpenModal} />
				</Button>
			</Stack>
		</Stack>
	);
};

const SidebarProfessorItem = ({ setOpenModal /* teacher  */ }) => {
	const handleRateClick = () => {
		setOpenModal(true);
	};

	return (
		<Typography
			level="body-md"
			sx={{
				px: 2,
				py: 1,
				borderRadius: 8,
				cursor: 'pointer',
				transition: 'all 0.2s ease-in-out',
				'&:hover': {
					backgroundColor: 'background.level2',
				},
			}}
			onClick={handleRateClick}
		>
			José Luis Machado Pulgar
			{/* {teacher.name} */}
		</Typography>
	);
};

export default SidebarProfessor;
