import { Box, Sheet, Typography } from '@mui/joy';
import { useSubject } from '../../hooks/queries/useSubject';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const { data, error, status } = useSubject();

	const groupedSubjects = data?.reduce((acc, subject) => {
		const term = subject.term;
		if (!acc[term]) {
			acc[term] = [];
		}
		acc[term].push(subject);
		return acc;
	}, {});

	return (
		<Box
			style={{
				height: '100%',
				overflowY: 'scroll',
			}}
		>
			{status === 'pending' && <p>Loading...</p>}
			{status === 'error' && <p>Error: {error.message}</p>}
			{status === 'success' && (
				<>
					{Object.entries(groupedSubjects)
						.sort(([termA], [termB]) => termA.localeCompare(termB)) // Sort terms alphabetically
						.map(([term, subjects]) => (
							<div key={term}>
								<h3>Term {term}</h3>
								<Sheet
									variant="soft"
									sx={{
										p: 1,
										display: 'flex',
										flexDirection: 'column',
										gap: 1,
									}}
								>
									{subjects
										.sort((a, b) => a.name.localeCompare(b.name)) // Sort subjects alphabetically
										.map((subject) => (
											<NavLink
												key={subject._id}
												to={`/subject/${subject._id}`}
												style={({ isActive }) => {
													return {
														textDecoration: 'none',
														fontWeight: isActive ? 'bold' : '',
													};
												}}
											>
												<Sheet variant="outlined" sx={{ px: 2, py: 1 }}>
													<Typography>{subject.name}</Typography>
												</Sheet>
											</NavLink>
										))}
								</Sheet>
							</div>
						))}
				</>
			)}
		</Box>
	);
};

export default Sidebar;
