import { api } from './axios';

export const getSubjects = async () => {
	try {
		const response = await api.get('/subjects');
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching subjects: ${error.response.data.message}`);
	}
};

export const getSubject = async (subjectId) => {
	try {
		const response = await api.get(`/subjects/${subjectId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching subject: ${error.response.data.message}`);
	}
};

export const getSubjectPosts = async (subjectId) => {
	try {
		const response = await api.get(`/subjects/${subjectId}/posts`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching posts: ${error.response.data.message}`);
	}
};

export const createSubjectPost = async ({ subjectId, title, description }) => {
	try {
		const response = await api.post(`/subjects/${subjectId}/posts`, {
			title,
			description,
		});
		return response.data.data;
	} catch (error) {
		throw new Error(`Error creating post: ${error.response.data.message}`);
	}
};
