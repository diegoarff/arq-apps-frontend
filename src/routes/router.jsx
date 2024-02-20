import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RootLayout from '../components/layout/RootLayout';
import SubjectPage from '../pages/SubjectPage';
import CreatePostPage from '../pages/CreatePostPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/subject/:subjectId', element: <SubjectPage /> },
			{ path: '/post/new', element: <CreatePostPage /> },
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
]);
