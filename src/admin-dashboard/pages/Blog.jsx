import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => setPosts(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Articles du blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4 p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
