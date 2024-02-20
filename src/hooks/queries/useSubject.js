import { getSubject, getSubjects } from '../../api/subject';
import { useQuery } from '@tanstack/react-query';

export const useSubject = () => {
	return useQuery({
		queryKey: ['subject'],
		queryFn: getSubjects,
	});
};

export const useSubjectById = (id) => {
	return useQuery({
		queryKey: ['subject', id],
		queryFn: () => getSubject(id),
	});
};
