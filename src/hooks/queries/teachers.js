import { getTeacherBySubjects, createTeacherRating } from '../../api/teachers';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useTeachersBySubject = (subjectId) => {
	return useQuery({
		queryKey: ['subjects', subjectId, 'teachers'],
		queryFn: () => getTeacherBySubjects(subjectId),
	});
};

export const useCreateTeacherRatingMutation = () => {
	return useMutation({
		mutationFn: (data) => createTeacherRating(data),
		onError: (error) => {
			console.log('🚀 ~ useCreateTeacherRatingMutation ~ error:', error);
		},
	});
};
