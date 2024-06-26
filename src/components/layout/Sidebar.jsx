import { Typography, Stack } from '@mui/joy';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useUniversitySubjects } from '../../hooks/queries/universities';
import SidebarSkeleton from '../skeletons/SkeletonSidebar';
import { useGlobalStore } from '../../store/useGlobalStore';

//Falta traducir TRIMESTRE dependiendo del país.

const Sidebar = () => {
	return (
		<Stack
			gap={2}
			sx={{
				backgroundColor: 'background.level1',
				padding: 2,
				borderRight: '1px solid',
				borderColor: 'divider',
				height: 'calc(100vh - 64px)',
				overflowY: 'auto',
				width: 350,

				'&::-webkit-scrollbar': {
					width: 6,
				},

				'&::-webkit-scrollbar-thumb': {
					backgroundColor: 'background.level2',
					borderRadius: 8,
				},
			}}
		>
			<SidebarData />
		</Stack>
	);
};

const SidebarData = () => {
	const user = useAuthStore((state) => state.user);
	const setSelectedSubject = useGlobalStore(
		(state) => state.setSelectedSubject
	);

	const { data, status } = useUniversitySubjects(user.university.id);

	if (status === 'pending') {
		return <SidebarSkeleton />;
	}

	if (status === 'error') {
		throw new Error('Error al intentar obtener los datos');
	}

	return (
		<>
			{data.map(({ term, subjects }) => (
				<Stack direction="column" key={term} gap={1}>
					<Typography
						level="body-sm"
						fontWeight="lg"
						sx={{ color: 'text.terciary' }}
					>
						TRIMESTRE {term}
					</Typography>

					<Stack gap={0.5}>
						{subjects
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((subject) => (
								<NavLink
									to={`/subject/${subject.id}`}
									style={{ textDecoration: 'none' }}
									key={subject.id}
									onClick={() => setSelectedSubject(subject)}
								>
									{({ isActive }) => (
										<SidebarItem isActive={isActive} subject={subject} />
									)}
								</NavLink>
							))}
					</Stack>
				</Stack>
			))}
		</>
	);
};

const SidebarItem = ({ isActive, subject }) => {
	return (
		<Typography
			level="body-md"
			sx={{
				color: isActive ? `primary.500` : `text.secondary`,
				px: 2,
				py: 1,
				borderRadius: 8,
				cursor: 'pointer',
				transition: 'all 0.2s ease-in-out',
				backgroundColor: isActive ? 'background.level2' : 'transparent',
				'&:hover': {
					backgroundColor: 'background.level2',
				},
			}}
		>
			{subject.name}
		</Typography>
	);
};

export default Sidebar;
