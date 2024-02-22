import { useQuery, useMutation } from '@tanstack/react-query';
import { createPost, getSubjectPosts } from '../../api/post';

export const useSubjectPosts = (subjectId) => {
	return useQuery({
		queryKey: ['subjectPosts', subjectId],
		queryFn: () => getSubjectPosts(subjectId),
		enabled: !!subjectId,
	});
};

export const useCreatePostMutation = () => {
	return useMutation({
		mutationFn: (data) => createPost(data),
		onError: (error) => {
			console.log('🚀 ~ useCreatePostMutation ~ error:', error);
		},
	});
};
