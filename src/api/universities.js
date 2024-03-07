import { api } from './axios';

export const getUniversities = async () => {
	try {
		const response = await api.get('/universities');
		return response.data.data;
	} catch (error) {
		throw new Error(
			`Error fetching universities: ${error.response.data.message}`
		);
	}
};

export const getUniversity = async (id) => {
	try {
		const response = await api.get(`/universities/${id}`);
		return response.data.data;
	} catch (error) {
		throw new Error(
			`Error fetching university: ${error.response.data.message}`
		);
	}
};

export const getUniversitySubjects = async (id) => {
	try {
		const response = await api.get(`/universities/${id}/subjects`);
		return response.data.data;
	} catch (error) {
		throw new Error(
			`Error fetching university subjects: ${error.response.data.message}`
		);
	}
};
