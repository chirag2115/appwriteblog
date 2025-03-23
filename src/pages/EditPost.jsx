import React, { useEffect, useState } from "react";
import { Container, PostForm, Button } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                    } else {
                        setError("Post not found.");
                    }
                })
                .catch(() => setError("Failed to load post."))
                .finally(() => setLoading(false));
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {
            const deleted = await appwriteService.deletePost(post.$id);
            if (deleted) {
                navigate("/");
            }
        }
    };

    if (loading) return <p className="text-center py-10 text-gray-100">Loading post...</p>;
    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10">
            <Container className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Edit Post</h2>
                    <Button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                        Delete
                    </Button>
                </div>

                {/* Display Post Image with Smaller Size */}
                {post.featuredImage && (
                    <div className="w-full flex justify-center mb-4 bg-gray-100">
                        <img 
                            src={appwriteService.getFilePreview(post.featuredImage)} 
                            alt="Post" 
                            className="max-w-[300px] max-h-[300px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                )}

                <PostForm post={post} />
            </Container>
        </div>
    );
}

export default EditPost;





