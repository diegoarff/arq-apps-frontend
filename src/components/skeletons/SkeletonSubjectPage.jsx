import Card from '@mui/joy/Card';

import Skeleton from '@mui/joy/Skeleton';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Grid';

export default function SkeletonSubjectPage() {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			width="100%"
			spacing={2}
		>
			<Grid xs={6}>
				<Typography level="h1">
					<Skeleton variant="rectangular" />
				</Typography>
			</Grid>

			<Grid item xs={6}>
				<div>
					<Skeleton variant="text" width={100} />
					<Skeleton variant="text" width={100} />

					<Card variant="outlined">
						<Skeleton level="body-sm" variant="text" width={300} />
						<Skeleton level="body-sm" variant="text" width={300} />
						<Skeleton level="body-sm" variant="text" width={300} />
						<Skeleton level="body-sm" variant="text" width={300} />
						<Skeleton level="body-sm" variant="text" width={300} />
						<Skeleton level="body-sm" variant="text" width={300} />
						<Skeleton level="body-sm" variant="text" width={300} />
					</Card>
				</div>
			</Grid>
		</Grid>
	);
}
