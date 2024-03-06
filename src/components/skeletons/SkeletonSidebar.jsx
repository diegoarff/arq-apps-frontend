import { Typography, Stack, Skeleton, Card, CardContent } from '@mui/joy';

const SidebarSkeleton = () => {
	return (
		<Stack
			gap={1}
			sx={{
				backgroundColor: 'background.level1',
				padding: 1,
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
			<SidebarDataSkeleton />
		</Stack>
	);
};

const SidebarDataSkeleton = () => {
	const skeletonItems = Array.from({ length: 3 }); // Crear un array con 3 elementos para simular los trimestres

	return (
		<>
			{skeletonItems.map((_, index) => (
				<Stack direction="column" key={index} gap={0}>
					<Typography>
						<Skeleton width={100} />
					</Typography>

					<Stack gap={0}>
						<Card height={40}>
							<CardContent sx={{ gap: 0.5, mt: 1 }}>
								<Skeleton level="body-xs" variant="text" width="40%" />
								<Skeleton level="body-xs" variant="text" width="70%" />
							</CardContent>
						</Card>
					</Stack>
				</Stack>
			))}
		</>
	);
};

export default SidebarSkeleton;
