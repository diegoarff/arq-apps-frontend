import { create } from 'zustand';
import { login, register } from '../api/auth';

export const useAuthStore = create((set) => ({
	user: null,
	token: null,
	onLogin: async (username, password) => {
		const { user, token } = await login(username, password);
		console.log(user, token);
		set({ user, token });
	},
	onRegister: async (username, password) => {
		await register(username, password);
	},
}));
