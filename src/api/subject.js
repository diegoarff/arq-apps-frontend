import { api } from './axios';

export const getSubjects = async () => {
	try {
		const response = await api.get('/subject');
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching subjects: ${error.response.data.message}`);
	}
};

export const getSubject = async (id) => {
	try {
		const response = await api.get(`/subject/${id}`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching subject: ${error.response.data.message}`);
	}
};
