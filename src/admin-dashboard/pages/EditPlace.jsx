import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

export default function EditPlace() {
     const { id } = useParams();
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [categories, setCategories] = useState([]);
     const [imageFile, setImageFile] = useState(null);

     const { register, handleSubmit, reset } = useForm();

     // Auth user
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

     // Load categories
     useEffect(() => {
          const token = localStorage.getItem("token");
          axios.get("http://localhost:8000/api/categorys", {
               headers: {
                    "Authorization": `Bearer ${token}`
               }
          })
               .then(res => setCategories(res.data.data.cat))
               .catch(() => setCategories([]));
     }, []);

     // Load place data
     useEffect(() => {
          if (!id) return;
          const token = localStorage.getItem("token");
          axios.get(`http://localhost:8000/api/place/${id}`, {
               headers: {
                    "Authorization": `Bearer ${token}`
               }
          })
               .then(res => {
                    const place = res.data.data.place;
                    reset({
                         title: place.title,
                         content: place.content,
                         category: place.id_category,
                         latitude: place.latitude,
                         longitude: place.longitude,
                         slug: place.slug,
                    });
               })
               .catch(() => {});
     }, [id, reset]);

     const onSubmit = async (data) => {
          const token = localStorage.getItem("token");
          const formData = new FormData();
          formData.append("title", data.title);
          formData.append("content", data.content);
          if (imageFile) formData.append("img_preview", imageFile);
          formData.append("latitude", data.latitude);
          formData.append("longitude", data.longitude);
          formData.append("slug", data.slug);
          formData.append("id_category", data.category);
          formData.append("id_user", user.id);

          try {
               const response = await axios.post(
                    `http://localhost:8000/api/place/update/${id}`,
                    formData,
                    {
                         headers: {
                              "Authorization": `Bearer ${token}`,
                              "Content-Type": "multipart/form-data"
                         },
                    }
               );
               if (response.status === 200) {
                    alert("Place modifiée avec succès !");
                    setImageFile(null);
               } else if (response.status === 422) {
                    alert("Slug déjà utilisé");
               }
          } catch (error) {
               alert(error);
          }
     };

     return (
          <div className="Admin">
               <Header />
               <div className="headerAdmin">
                    <AdminSidebar />
                    <div className="main">
                         <div className="content">
                              <h2>Modifier une place</h2>
                              <form onSubmit={handleSubmit(onSubmit)} className="form-create-place">
                                   <div className="item">
                                        <label>Titre</label>
                                        <input {...register("title", { required: true })} />
                                   </div>
                                   <div className="item">
                                        <label>Contenue</label>
                                        <textarea {...register("content", { required: true })} />
                                   </div>
                                   <div className="item">
                                        <label>Catégorie</label>
                                        <select {...register("category", { required: true })}>
                                             {Array.isArray(categories) && categories.map(cat => (
                                                  <option key={cat.id} value={cat.id}>
                                                       {cat.name} ({cat.slug})
                                                  </option>
                                             ))}
                                        </select>
                                   </div>
                                   <div className="item">
                                        <label>Image de preview</label>
                                        <input
                                             type="file"
                                             accept="image/*"
                                             onChange={e => setImageFile(e.target.files[0])}
                                        />
                                   </div>
                                   <div className="item">
                                        <label>Latitude</label>
                                        <input {...register("latitude", { required: true })} />
                                   </div>
                                   <div className="item">
                                        <label>Longitude</label>
                                        <input {...register("longitude", { required: true })} />
                                   </div>
                                   <div className="item">
                                        <label>Slug</label>
                                        <input {...register("slug", { required: true })} />
                                   </div>
                                   <input type="submit" value="Modifier la place" />
                              </form>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     );
}