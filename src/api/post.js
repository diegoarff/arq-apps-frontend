import { api } from './axios';

export const getSubjectPosts = async (subjectId) => {
	try {
		const response = await api.get(`/post/subject/${subjectId}`);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const createPost = async (post) => {
	try {
		const response = await api.post(`/post`, post);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};
