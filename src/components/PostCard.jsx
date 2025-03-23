import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col">
        {/* Image Container */}
        <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-t-xl">
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <div className="p-2">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;





