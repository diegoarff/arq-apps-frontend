import {
	getPost,
	getPostComments,
	createComment,
	deleteComment,
} from '../../api/posts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const usePostById = (postId) => {
	return useQuery({
		queryKey: ['posts', postId],
		queryFn: () => getPost(postId),
	});
};

export const usePostComments = (postId) => {
	return useQuery({
		queryKey: ['posts', postId, 'comments'],
		queryFn: () => getPostComments(postId),
		enabled: !!postId,
	});
};

export const useCreateCommentMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => createComment(data),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['posts', data.post, 'comments'],
			});
		},
		onError: (error) => {
			console.log('🚀 ~ useCreateCommentMutation ~ error:', error);
		},
	});
};

export const useDeleteCommentMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (commentId) => deleteComment(commentId),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['posts', data.post, 'comments'],
			});
		},
		onError: (error) => {
			console.log('🚀 ~ useDeleteCommentMutation ~ error:', error);
		},
	});
};
