import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        appwriteService.getPosts()
            .then((response) => {
                if (response) {
                    setPosts(response.documents);
                }
            })
            .catch(() => setError("Failed to load posts. Please try again."))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="w-full py-8 bg-gray-100 min-h-screen flex justify-center">
            <Container className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl w-full">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">All Posts</h1>

                {/* Loading State */}
                {loading && <p className="text-center text-gray-500">Loading posts...</p>}
                
                {/* Error State */}
                {error && <p className="text-center text-red-500">{error}</p>}

                {/* Posts Grid */}
                {!loading && !error && (
                    <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post.$id} >
                                    <PostCard {...post} />
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 w-full col-span-full">
                                No posts available
                            </p>
                        )}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;






