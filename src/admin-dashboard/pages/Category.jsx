import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../../admin-dashboard/components/Sidebar";

const Categorys = () => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [categories, setCategories] = useState([])

     useEffect(() => {
          const fetchUser = async () => {
               const token = localStorage.getItem("token");
               if (!token) {
                    window.location.href = "/login";
                    return;
               }

               try {
                    const res = await axios.get("http://localhost:8000/api/currentuser", {
                         headers: {
                              Authorization: `Bearer ${token}`,
                              Accept: "application/json",
                         },
                    });

                    setUser(res.data.data.user);
               } catch (err) {
                    console.error(err);
                    localStorage.removeItem("token");
                    window.location.href = "/login";
               } finally {
                    setLoading(false);
               }
          };

          fetchUser();
     }, []);


     const [users, setUsers] = useState([]);

     useEffect(() => {
          const token = localStorage.getItem("token")
          axios.get("http://localhost:8000/api/categorys", {
               headers: {
                    "Authorization": `Bearer ${token}`
               }
          })
               .then(res => {
                    // Ensure categories is always an array
                    setCategories(res.data.data.cat)
               }
               )
               .catch(() => setCategories([]))

     }, [])
    

     return (
          <div className="Admin">
               <Header />
               <div className="headerAdmin">
                    <AdminSidebar />
                    <div className="main">

                         <div className="content">
                              <a href="/admin/category/create">Crée une catégorie</a>
                              <h2 className="text-2xl font-bold mb-4">Liste des catégories</h2>
                              <table className="w-full text-left border">
                                   <thead>
                                        <tr className="bg-gray-100">
                                             <th className="p-2 border">Nom</th>
                                             <th className="p-2 border">Slug</th>
                                             <th className="p-2 border">Couleur</th>
                                             <th className="p-2 border">Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {Array.isArray(categories) && categories.map(cat => (
                                             <tr key={cat.id} className="border-t">
                                                  <td className="p-2">{cat.name}</td>
                                                  <td className="p-2">{cat.slug}</td>
                                                  <td className="p-2">{cat.color}</td>
                                                  <td className="p-2"><a href={`/admin/category/edit/${cat.id}`}>Edit</a></td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>

                    </div>
               </div>
               <Footer />
          </div>

     );
};

export default Categorys;
