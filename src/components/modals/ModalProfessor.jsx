import { useState } from 'react';
import {
	Box,
	Button,
	DialogContent,
	DialogTitle,
	ListDivider,
	Modal,
	ModalDialog,
	Stack,
	Typography,
} from '@mui/joy';
import { Badge, ContactMail, ContactPhone } from '@mui/icons-material';
import { Rating, Star } from '@smastrom/react-rating';
import { useCreateTeacherRatingMutation } from '../../hooks/queries/teachers';
import { useParams } from 'react-router-dom';

const ratingValues = ['Muy malo', 'Malo', 'Regular', 'Bueno', 'Muy bueno'];

const CreateProfesorModal = ({ open, setOpen, teacher }) => {
	const { subjectId } = useParams();
	const [rating, setRating] = useState(0);

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

	const myStyles = {
		itemShapes: Star,
		activeFillColor: '#ffb700',
		inactiveFillColor: '#fbf1a9',
		orientation: 'horizontal',
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog sx={{ width: '40%' }}>
				<DialogTitle sx={{ marginBottom: '10px' }}>
					Información del profesor
				</DialogTitle>
				<DialogContent>
					<Stack py={2} gap={1}>
						<Typography startDecorator={<Badge />}>
							Nombre: &nbsp; <strong>{teacher?.name}</strong>
						</Typography>
						<Typography startDecorator={<ContactMail />}>
							Correo electrónico: &nbsp; <strong>{teacher?.email}</strong>
						</Typography>
						<Typography startDecorator={<ContactPhone />}>
							Teléfono: &nbsp; <strong>{teacher?.number}</strong>
						</Typography>
					</Stack>

					<ListDivider />

					<Stack py={2} gap={2} alignItems="center" justifyContent="center">
						<Typography sx={{ display: 'flex', justifyContent: 'center' }}>
							Califica al Prof. {teacher?.name} ({ratingValues[rating - 1]})
						</Typography>

						<Rating
							style={{ maxWidth: 300 }}
							value={rating}
							onChange={setRating}
							itemStyles={myStyles}
						/>
						<Typography sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								disabled={createTeacherRatingMutation.isPending || !rating}
								loading={createTeacherRatingMutation.isPending}
								onClick={rateTeacher}
							>
								Calificar
							</Button>
						</Typography>
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
							Aceptar
						</Button>
					</Box>
				</DialogContent>
			</ModalDialog>
		</Modal>
	);
};

export default CreateProfesorModal;
