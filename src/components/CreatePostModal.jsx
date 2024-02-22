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
import InputField from './forms/InputField';
import { useCreatePostMutation } from '../hooks/queries/usePost';
import { useQueryClient } from '@tanstack/react-query';

const CreatePostModal = ({ open, setOpen, subjectId }) => {
	const { control, handleSubmit, watch } = useForm();
	const title = watch('title');
	const description = watch('description');

	const queryClient = useQueryClient();
	const createPostMutation = useCreatePostMutation();

	const createPost = async (data) => {
		createPostMutation.mutate(
			{ subject: subjectId, ...data },
			{
				onSuccess: () => {
					queryClient.invalidateQueries({
						queryKey: ['subjectPosts', subjectId],
					});
					setOpen(false);
				},
			}
		);
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog
				sx={{
					width: '40%',
				}}
			>
				<DialogTitle>Crear nueva publicación</DialogTitle>
				<DialogContent>
					Llena la información para tu nueva publicación.
				</DialogContent>
				<form onSubmit={handleSubmit(createPost)}>
					<Stack spacing={2}>
						<InputField
							label="Título"
							name="title"
							control={control}
							rules={{
								required: 'El título es requerido',
								minLength: {
									value: 3,
									message: 'El título debe tener al menos 3 caracteres',
								},
							}}
						/>
						<InputField
							label="Descripción"
							name="description"
							control={control}
							isTextarea
							minRows={8}
							maxRows={8}
							rules={{
								required: 'La descripción es requerido',
								minLength: {
									value: 10,
									message: 'La descripción debe tener al menos 10 caracteres',
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
								disabled={
									createPostMutation.isPending || !title || !description
								}
								loading={createPostMutation.isPending}
							>
								Publicar
							</Button>
						</Box>
					</Stack>
				</form>
			</ModalDialog>
		</Modal>
	);
};

export default CreatePostModal;
