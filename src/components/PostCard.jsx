import React from 'react'
function PostCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col h-full">
        <img 
        src={post.image}
        alt={post.title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6 flex flex-col grow">
        <div className="text-gray-400 text-sm mb-2">{post.date}</div>
        
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
           {post.title}
         </h3>
         <p className="text-gray-600 mb-6 line-clamp-3 grow">
           {post.excerpt}
         </p>

        <Link to={`/post/${post.id}`}
        className="w-full text-center py-2 rounded-lg border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">
        Explore More</Link>
      </div>
    </div>
  )
}

export default PostCard
