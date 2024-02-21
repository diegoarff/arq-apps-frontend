import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { login, register } from '../api/auth';

export const useAuthStore = create(
	persist(
		(set) => ({
			user: null,
			token: null,
			onLogin: async (username, password) => {
				const { user, token } = await login(username, password);
				set({ user, token });
			},
			onRegister: async (username, password) => {
				await register(username, password);
			},
			onLogout: () => {
				set({ user: null, token: null });
			},
		}),
		{
			name: 'auth-storage',
		}
	)
);
