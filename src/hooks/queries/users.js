import { getUserProfile } from '../../api/users';
import { useQuery } from '@tanstack/react-query';

export const useUserProfile = (userId) => {
	return useQuery({
		queryKey: ['users', userId],
		queryFn: () => getUserProfile(userId),
	});
};
