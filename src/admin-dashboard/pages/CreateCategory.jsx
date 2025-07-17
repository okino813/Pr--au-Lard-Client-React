import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../../admin-dashboard/components/Sidebar";

export default function CreateCategory() {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

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



     const { register, handleSubmit, reset } = useForm();
     
     const onSubmit = async (data) => {
          const token = localStorage.getItem("token")
          const formData = new FormData()
          formData.append("name", data.name)
          formData.append("color", data.color)
          formData.append("slug", data.slug)

          try {
               const response = await axios.post(
                    "http://localhost:8000/api/categorys/create",
                    formData,
                    {
                         headers: {
                              "Authorization": `Bearer ${token}`,
                         },
                    }
               )
               if (response.status === 201) {
                    alert("Catégorie créée avec succès !")
                    reset()
               } else {
                    alert("Erreur lors de la création de la catégorie.")
               }
          } catch (error) {
               alert(error.response?.data?.message || error.message)
               console.log(token)
          }
     }
     return (
          <div className="Admin">
               <Header />
               <div className="headerAdmin">
                    <AdminSidebar />
                    <div className="main">
                         <div className="content">
                              <h2>Crée une catégorie</h2>
                              <form onSubmit={handleSubmit(onSubmit)} className="form-create-place">
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
                                   <input type="submit" value="Créer la catégorie" />
                              </form>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     )
}
