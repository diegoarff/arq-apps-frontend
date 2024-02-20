import { api } from './axios';

export const getSubjects = async () => {
	try {
		const response = await api.get('/subject');
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const getSubject = async (id) => {
	try {
		const response = await api.get(`/subject/${id}`);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};
