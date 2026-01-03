import { Link } from "react-router-dom";
import { posts } from "../data/posts";

function Posts() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          All Blog Posts
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore tutorials, coding tips, and articles written for learners and enthusiasts.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                By {post.author} • {post.date}
              </p>
              <p className="text-gray-600 mb-4 flex-grow">
                {post.content}
              </p>
              <Link
                to={`/post/${post.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
