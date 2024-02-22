import { useAuthStore } from '../store/useAuthStore';

const HomePage = () => {
	const { user, token } = useAuthStore();

	return (
		<>
			<div>{JSON.stringify(user)}</div>
			<div>{token}</div>
		</>
	);
};

export default HomePage;
