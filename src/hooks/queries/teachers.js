import { getTeacherBySubjects, createTeacherRating } from '../../api/teachers';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTeachersBySubject = (subjectId) => {
	return useQuery({
		queryKey: ['subjects', subjectId, 'teachers'],
		queryFn: () => getTeacherBySubjects(subjectId),
	});
};

export const useCreateTeacherRatingMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => createTeacherRating(data),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['subjects', data.subject, 'teachers'],
			});
		},
		onError: (error) => {
			console.log('🚀 ~ useCreateTeacherRatingMutation ~ error:', error);
		},
	});
};
