import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((response) => {
        if (response) {
          setPosts(response.documents);
        }
      })
      .catch(() => setError("Failed to load posts."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }


  if (posts.length === 0) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-2">Login to View Posts 🔒</h2>
            <p className="text-gray-500">You must be logged in to explore the content.</p>
          </div>
        </Container>
      </div>
    );
  }
  

  return (
    <div className="w-full py-16 bg-gray-100 min-h-screen">
      <Container>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Welcome to Our Blog 🚀</h1>
          <p className="text-gray-500 mt-2">Discover the latest posts from our community.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
