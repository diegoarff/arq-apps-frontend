import { Snackbar } from '@mui/joy';
import { useGlobalStore } from '../store/useGlobalStore';

const Snack = () => {
	const snackbar = useGlobalStore((state) => state.snackbar);
	const closeSnackbar = useGlobalStore((state) => state.closeSnackbar);

	return (
		<Snackbar
			open={snackbar.open}
			autoHideDuration={3000}
			onClose={closeSnackbar}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			variant={snackbar.variant}
			color={snackbar.color}
		>
			{`${snackbar.message}`}
		</Snackbar>
	);
};

export default Snack;
