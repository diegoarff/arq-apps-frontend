import {
	getPost,
	deletePost,
	deletePostAsAdmin,
	getPostComments,
	createComment,
	deleteComment,
} from '../../api/posts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useGlobalStore } from '../../store/useGlobalStore';

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

export const useDeletePostMutation = (postId) => {
	const queryClient = useQueryClient();
	const openSnackbar = useGlobalStore((state) => state.openSnackbar);
	return useMutation({
		mutationFn: () => deletePost(postId),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
			openSnackbar('Post eliminado');
		},
		onError: (error) => {
			console.log('🚀 ~ useDeletePostMutation ~ error:', error);
		},
	});
};

export const useDeletePostAsAdminMutation = (postId) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: () => deletePostAsAdmin(postId),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
		},
		onError: (error) => {
			console.log('🚀 ~ useDeletePostAsAdminMutation ~ error:', error);
		},
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
