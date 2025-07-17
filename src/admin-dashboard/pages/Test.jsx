import { useForm } from "react-hook-form"

export default function CreatePost() {
     const { register, handleSubmit, reset } = useForm()

     const onSubmit = async (data) => {
          const token = localStorage.getItem("token")
          try {
               const response = await fetch("https://ton-api.com/posts", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
               })
               if (response.ok) {
                    alert("Post créé avec succès !")
                    reset()
               } else {
                    alert("Erreur lors de la création du post.")
               }
          } catch (error) {
               alert("Erreur réseau.")
          }
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <label>Titre</label>
               <input {...register("title", { required: true })} />

               <label>Description</label>
               <textarea {...register("description", { required: true })} />

               <label>Catégorie</label>
               <input {...register("category")} />

               <input type="submit" value="Créer le poste" />
          </form>
     )
}