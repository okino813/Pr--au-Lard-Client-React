import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../../admin-dashboard/components/Sidebar";

const Places = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([])

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
    const token = localStorage.getItem("token")
    axios.get("http://localhost:8000/api/places", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

      .then(res => {
        // Ensure categories is always an array
        setPlaces(res.data.data.places)
      }
      )
      .catch(() => setPlaces([]))

     console.log(token);


  }, [])



  return (
    <div className="Admin">
      <Header />
      <div className="headerAdmin">
        <AdminSidebar />
        <div className="main">

          <div className="content printListPlace">
            <a href="/admin/place/create">Crée une place</a>
            <h2 className="text-2xl font-bold mb-4">Liste des places</h2>
            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Nom</th>
                  <th className="p-2 border">Slug</th>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">latitude</th>
                  <th className="p-2 border">longitude</th>
                  <th className="p-2 border">slug</th>
                  <th className="p-2 border">Catégorie</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(places) && places.map(place => (
                  <tr key={place.id} className="border-t">
                    <td className="p-2">{place.title}</td>
                    <td className="p-2">{place.slug}</td>
                    <td className="p-2"><img src={"http://localhost:8000/api/storage/" + place.img_preview} /></td>
                    <td className="p-2">{place.latitude}</td>
                    <td className="p-2">{place.longitude}</td>
                    <td className="p-2">{place.slug}</td>
                    <td className="p-2">{place.category.name}</td>
                    <td className="p-2"><a href={`/admin/place/edit/${place.id}`}>Edit</a></td>
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

export default Places;
