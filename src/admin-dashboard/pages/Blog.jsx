import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../../admin-dashboard/components/Sidebar";

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
    <div className="Admin">
        <Header />
        <div className="headerAdmin">
          <AdminSidebar />
          <div className="main">

            <div className="content">
            <a href="/admin/place/create">Créer places</a>

            <h2 className="text-2xl font-bold mb-4">Liste des places</h2>
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Titre</th>
                    <th className="p-2 border">Contenue</th>
                    <th className="p-2 border">Content</th>
                  </tr>
                </thead>
                <tbody>
                  <ul>
                {posts.map(post => (
                  <tr key={post.id} className="border-t">
                    <td className="text-lg font-semibold">{post.title}</td>
                    <td>{post.content.slice(0, 100)}...</td>
                    <td>{post.latitude}</td>
                    <td>{post.longitude}</td>
                    <td>{post.slug}</td>
                  </tr>
                ))}
              </ul>
              </tbody>
            </table>
          </div>
      
        </div>
     </div>
     <Footer />
  </div>
  );
};

export default Blog;
