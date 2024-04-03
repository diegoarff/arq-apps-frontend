import { Button, Stack, Typography } from '@mui/joy';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
//TODO: Conectar con librerias.
import CreateProfesorModal from '../modals/ModalProfessor';

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
				<Button variant="plain">
					<SidebarProfessorItem setOpenModal={setOpenModal} />
				</Button>

				<NavLink
					/* to={`/subject/${subject.id}`} */
					style={{ textDecoration: 'none' }}
					/* key={subject.id} */
					/* onClick={() => setSelectedSubject(subject)} */
				>
					{/* {({ isActive }) => (
							<SidebarItem isActive={isActive} subject={subject} />
						)} */}
					<SidebarProfessorItem />
				</NavLink>
			</Stack>
		</Stack>
	);
};

const SidebarProfessorItem = ({ setOpenModal }) => {
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
		</Typography>
	);
};

export default SidebarProfessor;
