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

export const register = async (username, password, university) => {
	try {
		const response = await api.post('/auth/register', {
			username,
			password,
			role: '65e7c9debf7f0ca95edb4b16',
			university,
		});
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
