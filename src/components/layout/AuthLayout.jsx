import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const AuthLayout = () => {
	const user = useAuthStore((state) => state.user);

	if (user) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};

export default AuthLayout;
