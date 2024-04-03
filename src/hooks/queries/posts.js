import{
    getPost,
    getPostComments,
    createComment
} from '../../api/posts';
import { useMutation, useQuery } from '@tanstack/react-query';

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
    return useMutation({
        mutationFn: (data) => createComment(data),
        onError: (error) => {
            console.log('🚀 ~ useCreateCommentMutation ~ error:', error);
        },
    });
};
