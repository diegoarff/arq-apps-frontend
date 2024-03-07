import {
	getSubject,
	getSubjects,
	getSubjectPosts,
	createSubjectPost,
} from '../../api/subjects';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useSubjects = () => {
	return useQuery({
		queryKey: ['subjects'],
		queryFn: getSubjects,
	});
};

export const useSubjectById = (subjectId) => {
	return useQuery({
		queryKey: ['subjects', subjectId],
		queryFn: () => getSubject(subjectId),
	});
};

export const useSubjectPosts = (subjectId) => {
	return useQuery({
		queryKey: ['subjects', subjectId, 'posts'],
		queryFn: () => getSubjectPosts(subjectId),
		enabled: !!subjectId,
	});
};

export const useCreateSubjectPostMutation = () => {
	return useMutation({
		mutationFn: ({ subjectId, data }) => createSubjectPost(subjectId, data),
		onError: (error) => {
			console.log('🚀 ~ useCreateSubjectPostMutation ~ error:', error);
		},
	});
};
