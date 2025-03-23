import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-4xl mx-auto bg-white p-8 lg:p-10 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center" aria-label="Add a New Post">
            Add a New Post
          </h2>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
