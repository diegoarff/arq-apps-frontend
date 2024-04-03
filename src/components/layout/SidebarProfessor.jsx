import { Button, Stack, Typography } from '@mui/joy';
import { NavLink } from 'react-router-dom';

//TODO: Conectar con librerias.

const SidebarProfessor = () => {
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
			<SidebarProfessorData />
		</Stack>
	);
};

const SidebarProfessorData = () => {
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
					<SidebarProfessorItem />
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

const SidebarProfessorItem = () => {
	return (
		<Typography
			level="body-md"
			sx={{
				/* color: isActive ? `primary.500` : `text.secondary`, */
				px: 2,
				py: 1,
				borderRadius: 8,
				cursor: 'pointer',
				transition: 'all 0.2s ease-in-out',
				/* backgroundColor: isActive ? 'background.level2' : 'transparent', */
				'&:hover': {
					backgroundColor: 'background.level2',
				},
			}}
		>
			{/* {subject.name} */}
			José Luis Machado Pulgar
		</Typography>
	);
};

export default SidebarProfessor;
