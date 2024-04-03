import { api } from './axios';

export const getTeacherBySubjects = async (subjectId) => {
	try {
		const response = await api.get(`/subjects/${subjectId}/teachers`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching subject: ${error.response.data.message}`);
	}
};

export const createTeacherRating = async ({
	teacherId,
	userId,
	subjectId,
	value,
}) => {
	try {
		const response = await api.post(`/ratings`, {
			user: userId,
			teacher: teacherId,
			value,
			subject: subjectId,
		});
		return response.data.data;
	} catch (error) {
		throw new Error(`Error creating post: ${error.response.data.message}`);
	}
};
