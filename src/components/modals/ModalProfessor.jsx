import { useState } from 'react';
import {
	Box,
	Button,
	DialogContent,
	DialogTitle,
	Modal,
	ModalDialog,
	Stack,
	Typography,
} from '@mui/joy';
import { Rating, Star } from '@smastrom/react-rating';
import { useCreateTeacherRatingMutation } from '../../hooks/queries/teachers';
import { useParams } from 'react-router-dom';

const ratingValues = ['Muy malo', 'Malo', 'Regular', 'Bueno', 'Muy bueno'];

const CreateProfesorModal = ({ open, setOpen, teacher }) => {
	const { subjectId } = useParams();
	const [rating, setRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);

	const createTeacherRatingMutation = useCreateTeacherRatingMutation();

	const rateTeacher = () => {
		createTeacherRatingMutation.mutate(
			{ subject: subjectId, value: rating, teacher: teacher.id },
			{
				onSuccess: () => {
					setOpen(false);
				},
			}
		);
	};

	// Declare it outside your component so it doesn't get re-created
	const myStyles = {
		itemShapes: Star,
		activeFillColor: '#ffb700',
		inactiveFillColor: '#fbf1a9',
		orientation: 'horizontal',
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog sx={{ width: '40%' }}>
				<DialogTitle>Calificar profesor</DialogTitle>
				<DialogContent>Califica al profesor seleccionado.</DialogContent>
				<Stack spacing={2}>
					<Stack direction="row" alignItems="center" spacing={2}>
						<Box
							flex={2}
							display="flex"
							justifyContent="center"
							alignItems="center"
						>
							<Rating
								style={{ maxWidth: 300 }}
								value={rating}
								onChange={setRating}
								onHoverChange={setHoverRating}
								itemStyles={myStyles}
							/>
						</Box>
						<Box flex={1}>
							<Typography>
								{ratingValues[hoverRating ? hoverRating - 1 : rating - 1]}
							</Typography>
						</Box>
					</Stack>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							gap: 2,
							alignItems: 'center',
						}}
					>
						<Button
							variant="plain"
							color="danger"
							onClick={() => {
								setOpen(false);
							}}
						>
							Cancelar
						</Button>
						<Button
							disabled={createTeacherRatingMutation.isPending || !rating}
							loading={createTeacherRatingMutation.isPending}
							onClick={rateTeacher}
						>
							Calificar
						</Button>
					</Box>
				</Stack>
			</ModalDialog>
		</Modal>
	);
};

export default CreateProfesorModal;
