import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, getPostComments } from '../api/posts';
import { Card, Typography, Button } from '@mui/joy';
import CreateCommentModal from '../components/CreateCommentModal';
import SkeletonPosts from '../components/skeletons/SkeletonPosts';

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPostAndComments = async () => {
            try {
                const postData = await getPost(postId);
                setPost(postData);

                const commentsData = await getPostComments(postId);
                setComments(commentsData);
            } catch (error) {
                console.error('Hubo un error al obtener el post o los comentarios:', error);
            }
        };

        fetchPostAndComments();
    }, [postId]);

    if (!post) {
        return <SkeletonPosts />;
    }

    return (
        <>
            
            <Card
                variant="outlined"
                sx={{
                    padding: 2,
                }}
            >
                <Typography level="body-sm">
                    Creado por {post.user.username} -{' '}
                    {new Date(post.createdAt).toLocaleDateString()}
                </Typography>

                <Typography level="h4">{post.title}</Typography>
                <Typography level="body-sm">{post.description}</Typography>
            </Card>



            <Button sx={{
                width: '100%',
            }}
                onClick={() => setIsModalOpen(true)}>Publicar comentario</Button>
            <CreateCommentModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                postId={postId}
            />

            <Typography variant="h3">Comentarios</Typography>

            {comments.length > 0 ? (
                comments.map((comment) => (
                    <Card
                        variant="outlined"
                        sx={{
                            padding: 2,
                            margin: 1,
                        }}
                        key={comment._id}
                    >
                        <Typography level="body-sm">
                            Creado por {comment.user.username} -{' '}
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </Typography>
                        <Typography level="body1">{comment.content}</Typography>
                    </Card>
                ))
            ) : (
                <Card
                    variant="outlined"
                    sx={{
                        padding: 2,
                        margin: 1,
                    }}
                >
                    <Typography level="body-md">
                        Aún no hay comentarios en esta publicación
                    </Typography>
                </Card>
            )}

        </>

    );
};



export default PostPage;