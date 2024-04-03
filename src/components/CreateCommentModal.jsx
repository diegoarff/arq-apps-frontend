import {
    Button,
    DialogContent,
    DialogTitle,
    Modal,
    ModalDialog,
    Stack,
} from '@mui/joy';
import { useForm } from 'react-hook-form';
import InputField from './forms/InputField';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateCommentMutation } from '../hooks/queries/posts';

const CreateCommentModal = ({ open, setOpen, postId }) => {
    const { control, handleSubmit, watch } = useForm();
    const content = watch('content');

    const queryClient = useQueryClient();
    const createCommentMutation = useCreateCommentMutation();

    const createComment = async (data) => {
        createCommentMutation.mutate(
            { postId, ...data },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ['posts', postId, 'comments'],
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
                <DialogTitle>Crear nuevo comentario</DialogTitle>
                <DialogContent>
                    Escribe tu comentario.
                </DialogContent>
                <form onSubmit={handleSubmit(createComment)}>
                    <Stack spacing={2}>
                        <InputField
                            label="Comentario"
                            name="content"
                            control={control}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#ff0000', 
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#cc0000', 
                                },
                            }}
                        >
                            Publicar comentario
                        </Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    );
};

export default CreateCommentModal;