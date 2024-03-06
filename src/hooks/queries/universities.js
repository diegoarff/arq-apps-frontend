import {
	getUniversities,
	getUniversity,
	getUniversitySubjects,
} from '../../api/universities';
import { useQuery } from '@tanstack/react-query';

export const useUniversities = () => {
	return useQuery({
		queryKey: ['universities'],
		queryFn: getUniversities,
	});
};

export const useUniversityById = (universityId) => {
	return useQuery({
		queryKey: ['universities', universityId],
		queryFn: () => getUniversity(universityId),
	});
};

export const useUniversitySubjects = (universityId) => {
	return useQuery({
		queryKey: ['universities', universityId, 'subjects'],
		queryFn: () => getUniversitySubjects(universityId),
	});
};
