import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        let isMounted = true;

        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (isMounted) {
                    if (post) setPost(post);
                    else navigate("/");
                }
            });
        } else navigate("/");

        return () => {
            isMounted = false; // Cleanup
        };
    }, [slug, navigate]);

    const deletePost = () => {
        if (!post) return;

        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    navigate("/");
                }
            });
        }
    };

    return post ? (
        <div className="py-8 flex justify-center">
            <Container>
                {/* Post Wrapper */}
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
                    {/* Image Section */}
                    <div className="relative w-full flex justify-center mb-6 bg-gray-100 border rounded-lg">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="w-full max-h-[600px] object-contain rounded-lg"
                        />

                        {isAuthor && (
                            <>
                                {/* Edit Button (left) */}
                                <div className="absolute left-4 top-4">
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">
                                            Edit
                                        </Button>
                                    </Link>
                                </div>

                                {/* Delete Button (right) */}
                                <div className="absolute right-4 top-4">
                                    <Button
                                        onClick={deletePost}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">{post.title}</h1>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow leading-7 text-gray-800">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}


