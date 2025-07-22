
import axios from "axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Place = () => {
     const [place, setPlace] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const { slugCategory, slugPlace } = useParams();

     useEffect(() => {
          const fetchPlace = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/api/category/${slugCategory}/place/${slugPlace}`);
                setPlace(response.data.data.place);
                console.log(response.data.data.place);
            } catch (err) {
                // On redirige vers la page d'accueil en cas d'erreur
               window.location.href = "/";
            } finally {
                setLoading(false);
            }
        };
          fetchPlace();
     }, []);
     
     if (loading) {
          return <div>Chargement...</div>;
     }
     
     return (
          
     <div className="Place">
          <Header />
          <div className="place-container">
               <div className="place">
                    <div className="place-header">
                         <img
                              src={"http://localhost:8000/api/storage/" + place.img_preview}
                              alt={place.title}
                              style={{ width: "100%", maxWidth: 500, borderRadius: 8, marginTop: 20 }}
                              />
                         <div className="place-info">
                              <h1>{place.title}</h1>
                              <p>Fais le {place.created_at}</p>
                              <p>Par {place.user.firstname} {place.user.lastname}</p>

                         </div>
                    </div>
                    {/* {place.content} */}

                    <div className="place-content" dangerouslySetInnerHTML={{ __html: place.content }} />

               </div>
          </div>

          <Footer />
     </div>
     );
};

export default Place;