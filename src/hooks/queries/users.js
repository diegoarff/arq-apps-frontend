import { banUser, getUserProfile } from '../../api/users';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useGlobalStore } from '../../store/useGlobalStore';

export const useUserProfile = (userId) => {
	return useQuery({
		queryKey: ['users', userId],
		queryFn: () => getUserProfile(userId),
	});
};

export const useBanUserMutation = (userId) => {
	const queryClient = useQueryClient();
	const openSnackbar = useGlobalStore((state) => state.openSnackbar);
	return useMutation({
		mutationFn: () => banUser(userId),
		onSuccess: (user) => {
			queryClient.invalidateQueries({
				queryKey: ['users', userId],
			});
			openSnackbar(user.banned ? 'Usuario baneado' : 'Usuario desbaneado');
		},
		onError: (error) => {
			console.log('🚀 ~ useBanUserMutation ~ error:', error);
		},
	});
};
