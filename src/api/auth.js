import { api } from './axios';

export const login = async (data) => {
	try {
		const response = await api.post('/auth/login', data);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error logging user in: ${error.response.data.message}`);
	}
};

export const register = async (data) => {
	try {
		const response = await api.post('/auth/register', {
			...data,
			role: '65e7c9debf7f0ca95edb4b16',
		});
		return response.data.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};
