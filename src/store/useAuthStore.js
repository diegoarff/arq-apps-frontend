import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { login, register } from '../api/auth';

export const useAuthStore = create(
	persist(
		(set) => ({
			user: null,
			token: null,
			onLogin: async (data) => {
				const { user, token } = await login(data);
				set({ user, token });
			},
			onRegister: async (data) => {
				await register(data);
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
