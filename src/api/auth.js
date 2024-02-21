import { api } from './axios';

export const login = async (username, password) => {
	try {
		const response = await api.post('/auth/login', {
			username,
			password,
		});
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const register = async (username, password) => {
	try {
		const response = await api.post('/auth/register', {
			username,
			password,
			role: '65d29ef35022ee5f94506867',
		});
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
