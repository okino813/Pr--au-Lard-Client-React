import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../../admin-dashboard/components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";

export default function EditCategory() {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [fetching, setFetching] = useState(true);
     const { id } = useParams();
     const navigate = useNavigate();
     const { register, handleSubmit, reset } = useForm();

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

     useEffect(() => {
          const fetchCategory = async () => {
               const token = localStorage.getItem("token");
               if (!token) return;
               try {
                    const res = await axios.get(`http://localhost:8000/api/category/${id}`, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                              Accept: "application/json",
                         },
                    });
                    reset({
                         name: res.data.data.cat.name,
                         color: res.data.data.cat.color,
                         slug: res.data.data.cat.slug,
                    });
               } catch (err) {
                    alert("Erreur lors du chargement de la catégorie.");
               } finally {
                    setFetching(false);
               }
          };
          if (id) fetchCategory();
     }, [id, reset]);

     const onSubmit = async (data) => {
          const token = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("name", data.name);
          formData.append("color", data.color);
          formData.append("slug", data.slug);

          try {
               const response = await axios.post(
                    `http://localhost:8000/api/category/update/${id}`,
                    formData,
                    {
                         headers: {
                              "Authorization": `Bearer ${token}`,
                         },
                    }
               );
               if (response.status === 200) {
                    alert("Catégorie modifiée avec succès !");
                    navigate("/admin/category/");
               } else {
                    alert("Erreur lors de la modification de la catégorie.");
               }
          } catch (error) {
               alert(error.response?.data?.message || error.message);
          }
     };

     if (loading || fetching) return <div>Chargement...</div>;

     return (
          <div className="Admin">
               <Header />
               <div className="headerAdmin">
                    <AdminSidebar />
                    <div className="main">
                         <div className="content">
                              <h2>Modifier la catégorie</h2>
                              <form onSubmit={handleSubmit(onSubmit)} className="form-create-category">
                                   <div className="item">
                                        <label>Nom</label>
                                        <input {...register("name", { required: true })} />
                                   </div>
                                   <div className="item">
                                        <label>Couleur en Héxadécimal</label>
                                        <input {...register("color", { required: true })} />
                                   </div>
                                   <div className="item">
                                        <label>Slug</label>
                                        <input {...register("slug", { required: true })} />
                                   </div>
                                   <input type="submit" value="Modifier la catégorie" />
                              </form>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     );
}
