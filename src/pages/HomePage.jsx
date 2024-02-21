import { Button } from '@mui/joy';
import { useAuthStore } from '../store/useAuthStore';

const HomePage = () => {
	const { user, token } = useAuthStore();

	return (
		<>
			<div>{JSON.stringify(user)}</div>
			<div>{token}</div>
			<Button onClick={() => useAuthStore.getState().onLogout()}>Logout</Button>
		</>
	);
};

export default HomePage;
