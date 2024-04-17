import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RootLayout from '../components/layout/RootLayout';
import SubjectPage from '../pages/SubjectPage';
import AuthLayout from '../components/layout/AuthLayout';
import UserLayout from '../components/layout/UserLayout';
import ErrorPage from '../pages/ErrorPage';
import PostPage from '../pages/PostPage';
import MyProfilePage from '../pages/MyProfilePage';
import UserProfilePage from '../pages/UserProfilePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/subject/:subjectId', element: <SubjectPage /> },
			{ path: '/post/:postId', element: <PostPage /> },
			{ path: '/users/:userId', element: <UserProfilePage /> },
		],
	},
	{
		path: '/users',
		element: <UserLayout />,
		errorElement: <ErrorPage />,
		children: [{ path: 'profile', element: <MyProfilePage /> }],
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
