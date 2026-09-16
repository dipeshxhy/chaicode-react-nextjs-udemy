import { useEffect } from 'react';
import { usePostStore } from '../store/postStore';

const ShowPosts = () => {
  const { posts, loading, error } = usePostStore((state) => state);

  const fetchPosts = usePostStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md text-black">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border p-2 mb-2 rounded bg-zinc-700 text-white">
              <h3>{post.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ShowPosts;
