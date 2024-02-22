import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';

export const api = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	async (config) => {
		const { token } = useAuthStore.getState();

		if (config?.headers && token) {
			config.headers.authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);
