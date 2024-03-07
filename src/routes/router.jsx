import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RootLayout from '../components/layout/RootLayout';
import SubjectPage from '../pages/SubjectPage';
import AuthLayout from '../components/layout/AuthLayout';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/subject/:subjectId', element: <SubjectPage /> },
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: 'login', element: <LoginPage /> },
			{ path: 'register', element: <RegisterPage /> },
		],
	},
]);
