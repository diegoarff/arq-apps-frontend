import { api } from './axios';

export const getTeacherBySubjects = async (subjectId) => {
	try {
		const response = await api.get(`/subjects/${subjectId}/teachers`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching subject: ${error.response.data.message}`);
	}
};

export const createTeacherRating = async (data) => {
	try {
		const response = await api.post(`/ratings`, data);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error creating post: ${error.response.data.message}`);
	}
};
