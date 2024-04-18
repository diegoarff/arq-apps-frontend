import { authApi } from './axios';

export const login = async (data) => {
	try {
		const response = await authApi.post('/login', data);
		return response.data.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const register = async (data) => {
	try {
		const response = await authApi.post('/register', {
			...data,
			role: 'user',
		});
		return response.data.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};
