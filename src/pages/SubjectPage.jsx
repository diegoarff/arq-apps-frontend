import { useParams } from 'react-router-dom';
import { useSubjectById } from '../hooks/queries/useSubject';

const SubjectPage = () => {
	const { subjectId } = useParams();
	const { data, error, status } = useSubjectById(subjectId);

	if (status === 'pending') {
		return <p>Loading...</p>;
	}

	if (status === 'error') {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.term}</p>
		</div>
	);
};

export default SubjectPage;
