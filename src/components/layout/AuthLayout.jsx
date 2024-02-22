import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useEffect } from 'react';

const AuthLayout = () => {
	const user = useAuthStore((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			return navigate('/', { replace: true });
		}
	}, [navigate, user]);

	return <Outlet />;
};

export default AuthLayout;
