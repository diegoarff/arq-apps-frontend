import { Skeleton, Card, Typography, Grid } from '@mui/joy';

const SkeletonPosts = () => {
	const skeletonItems = Array.from({ length: 3 });

	return (
		<>
			{skeletonItems.map((_, index) => (
				<Grid xs={6} key={index}>
					<Card key={index} sx={{ padding: 2 }}>
						<Typography
							level="body-sm"
							sx={{ position: 'relative', overflow: 'hidden' }}
						>
							<Skeleton>Creado por tu amigo fiel</Skeleton>
						</Typography>
						<Typography
							level="h4"
							sx={{ position: 'relative', overflow: 'hidden' }}
						>
							<Skeleton>
								Este debería ser un título bueno, pero mejor no
							</Skeleton>
						</Typography>
						<Typography
							level="body-sm"
							sx={{ position: 'relative', overflow: 'hidden' }}
						>
							<Skeleton>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
								repellendus nisi maiores facilis amet quos quidem quod iure
								maxime nihil, corporis sequi?
							</Skeleton>
						</Typography>
					</Card>
				</Grid>
			))}
		</>
	);
};

export default SkeletonPosts;
