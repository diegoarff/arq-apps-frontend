import {
	Box,
	Button,
	DialogContent,
	DialogTitle,
	Modal,
	ModalDialog,
	Stack,
} from '@mui/joy';
import { useForm } from 'react-hook-form';
import InputField from '../forms/InputField';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateTeacherRatingMutation } from '../../hooks/queries/teachers';

const CreateProfesorModal = ({ open, setOpen, subjectId }) => {
	const { control, handleSubmit, watch } = useForm();
	const rating = watch('rating');

	const queryClient = useQueryClient();
	const createTeacherRatingMutation = useCreateTeacherRatingMutation();

	const rateTeacher = async (data) => {
		createTeacherRatingMutation.mutate(
			{ subjectId, ...data },
			{
				onSuccess: () => {
					queryClient.invalidateQueries(['subjects', subjectId]);
					setOpen(false);
				},
			}
		);
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog sx={{ width: '40%' }}>
				<DialogTitle>Calificar profesor</DialogTitle>
				<DialogContent>Califica al profesor seleccionado.</DialogContent>
				<form onSubmit={handleSubmit(rateTeacher)}>
					<Stack spacing={2}>
						<InputField
							label="Calificación"
							name="rating"
							control={control}
							type="number"
							rules={{
								required: 'La calificación es requerida',
								min: {
									value: 1,
									message: 'La calificación debe ser mínimo 1',
								},
								max: {
									value: 5,
									message: 'La calificación debe ser máximo 5',
								},
							}}
						/>
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
								type="submit"
								disabled={createTeacherRatingMutation.isPending || !rating}
								loading={createTeacherRatingMutation.isPending}
							>
								Calificar
							</Button>
						</Box>
					</Stack>
				</form>
			</ModalDialog>
		</Modal>
	);
};

export default CreateProfesorModal;
