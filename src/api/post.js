import { api } from './axios';

export const getSubjectPosts = async (subjectId) => {
	try {
		const response = await api.get(`/post/subject/${subjectId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching posts: ${error.response.data.message}`);
	}
};

export const createPost = async (post) => {
	try {
		const response = await api.post(`/post`, post);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error creating post: ${error.response.data.message}`);
	}
};
