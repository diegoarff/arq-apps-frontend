import { api } from './axios';

export const getUserProfile = async (userId) => {
	try {
		const response = await api.get(`/users/${userId}`);
		return response.data.data;
	} catch (error) {
		throw new Error(
			`Error fetching user profile: ${error.response.data.message}`
		);
	}
};
