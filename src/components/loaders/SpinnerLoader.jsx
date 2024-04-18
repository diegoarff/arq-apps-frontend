import { Box } from '@mui/joy';
import CircularProgress from '@mui/joy/CircularProgress';

const SpinnerLoader = () => {
	return (
		<Box
			sx={{
				height: '100dvh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress color="primary" variant="plain" size="lg" />
		</Box>
	);
};

export default SpinnerLoader;
