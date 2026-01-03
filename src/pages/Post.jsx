import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <p className="text-red-500">Post not found!</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <img src={post.image} alt={post.title} className="w-full h-60 object-cover rounded mb-4" />
      <h2 className="text-3xl font-bold text-blue-700 mb-2">{post.title}</h2>
      <p className="text-gray-500 text-sm mb-4">By {post.author} • {post.date}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
      <div className="flex gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Post;



