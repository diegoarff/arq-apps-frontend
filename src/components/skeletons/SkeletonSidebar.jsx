import { Stack, Skeleton } from '@mui/joy';

const SidebarSkeleton = () => {
	const skeletonItems = Array.from({ length: 3 });

	return (
		<Stack gap={2}>
			{skeletonItems.map((_, index) => (
				<Stack key={index} gap={1}>
					<Skeleton variant="rectangular" width={80} height={20} />

					<Stack gap={0.6}>
						<Skeleton variant="rectangular" height={40} />
						<Skeleton variant="rectangular" height={40} />
					</Stack>
				</Stack>
			))}
		</Stack>
	);
};

export default SidebarSkeleton;
