import { Box, Grid, Sheet, Typography, Divider } from '@mui/joy'; // Se agrego el componente Grid
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
		<Box sx={{ backgroundColor: '#121316', p: 1.5 }}>
			{status === 'pending' && <p>Loading...</p>}
			{status === 'error' && <p>Error: {error.message}</p>}
			{status === 'success' && (
				<Grid container direction="column" spacing={0} margin={0}>
					{Object.entries(groupedSubjects)
						.sort(([termA], [termB]) => termA.localeCompare(termB))
						.map(([term, subjects]) => (
							<Grid item key={term} margin={0.5}>
								<Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
									Term {term}
								</Typography>

								<Grid container direction="column" spacing={1}>
									{subjects
										.sort((a, b) => a.name.localeCompare(b.name))
										.map((subject) => (
											<Grid item key={subject._id}>
												<NavLink
													to={`/subject/${subject._id}`}
													style={({ isActive }) => ({
														textDecoration: 'none',
														fontWeight: isActive ? 'bold' : '',
														color: isActive ? 'primary.main' : '', // Use Material UI's theme colors
													})}
												>
													<Sheet
														variant="outlined"
														sx={{
															px: 2,
															py: 1,
															borderRadius: 5,
															cursor: 'pointer',
															transition: 'all 0.2s ease-in-out',
															backgroundColor: '#121316',
															color: '#333',
															'&:hover': {
																backgroundColor: '#404146',
																boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
															},
														}} // Hover effect
													>
														<Typography variant="body1">
															{subject.name}
														</Typography>
													</Sheet>
												</NavLink>
											</Grid>
										))}
									<Divider />
								</Grid>
							</Grid>
						))}
				</Grid>
			)}
		</Box>
	);
};
export default Sidebar;
