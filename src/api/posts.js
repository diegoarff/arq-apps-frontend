import { api } from './axios';

export const getPost = async (postId) => {
	try {
		const response = await api.get(`/posts/${postId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching post: ${error.response.data.message}`);
	}
};

export const deletePost = async (postId) => {
	try {
		const response = await api.delete(`/posts/${postId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error deleting post: ${error.response.data.message}`);
	}
};

export const deletePostAsAdmin = async (postId) => {
	try {
		const response = await api.delete(`/posts/admin/${postId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(
			`Error deleting post as admin: ${error.response.data.message}`
		);
	}
};

export const createComment = async ({ postId, content }) => {
	try {
		const response = await api.post(`/posts/${postId}/comments`, {
			content,
		});
		return response.data.data;
	} catch (error) {
		throw new Error(`Error creating comment: ${error.response.data.message}`);
	}
};

export const getPostComments = async (postId) => {
	try {
		const response = await api.get(`/posts/${postId}/comments`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error fetching comments: ${error.response.data.message}`);
	}
};

export const deleteComment = async (commentId) => {
	try {
		const response = await api.delete(`/comments/${commentId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(`Error deleting comment: ${error.response.data.message}`);
	}
};
