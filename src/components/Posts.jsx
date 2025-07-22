import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import PostCard from "./PostCard";
const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("posts", posts);
  let content;

  if (isLoading) {
    content = <h1>Loading posts...</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No posts found!</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <div className="space-y-6">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Posts;
