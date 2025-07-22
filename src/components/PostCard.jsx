import { Heart, Laugh, Lightbulb, ThumbsUp, ThumbsDown, Meh, Share2, Eye, Video } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white p-5 rounded-2xl shadow-md space-y-4 border border-gray-200 dark:border-zinc-700">
      
      {/* Author & Date */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>📧 {post.authorEmail}</p>
        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Post Text */}
      <div className="space-y-2">
        <p className="whitespace-pre-line">{post.text}</p>
        
        {/* Hashtags */}
        {post.hashtags?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-blue-500">
            {post.hashtags.map((tag, i) => (
              <span key={i}>#{tag}</span>
            ))}
          </div>
        )}
      </div>

     
   

      {/* Reactions, Views, Shares */}
      <div className="flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400 mt-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1"><ThumbsUp size={16} /> {post.reactions.like}</div>
          <div className="flex items-center gap-1"><Heart size={16} /> {post.reactions.love}</div>
          <div className="flex items-center gap-1"><Lightbulb size={16} /> {post.reactions.smart}</div>
          <div className="flex items-center gap-1"><Laugh size={16} /> {post.reactions.funny}</div>
          <div className="flex items-center gap-1"><Meh size={16} /> {post.reactions.wow}</div>
          <div className="flex items-center gap-1"><ThumbsDown size={16} /> {post.reactions.sad}</div>
        </div>
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <div className="flex items-center gap-1"><Share2 size={16} /> {post.shares}</div>
          <div className="flex items-center gap-1"><Eye size={16} /> {post.views}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
