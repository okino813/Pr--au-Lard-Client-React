import '../scss/app.scss';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import imageHogsmeade from '../assets/images/hogsmeade.png'
import axios from 'axios';
import DOMPurify from 'dompurify';

function truncateHTML(html: string, limit: number) {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  const truncated = text.length > limit ? text.slice(0, limit) + "..." : text;
  return DOMPurify.sanitize(truncated);
}

function Home() {
     const [points, setPoints] = React.useState([]);
     const [hoveredPoint, setHoveredPoint] = React.useState(null);

     React.useEffect(() => {
          axios.get('http://localhost:8000/api/places')
               .then(
                    res => {
                         setPoints(res.data.data.places);
                         console.log(res);
                    }
               )
               .catch(err => {
                    console.error('Erreur lors du chargement des points:', err);
                    setPoints([]);
               });
     }, []);

     // Helper pour convertir latitude/longitude en position sur l'image (à adapter selon votre image)
     const getPosition = (latitude, longitude) => {
          // Si vos lat/lon sont déjà des pourcentages, utilisez-les directement
          // Sinon, adaptez ce calcul selon votre image
          return {
               top: `${latitude}%`,
               left: `${longitude}%`
          };
     };

     return (
          <div className="Home">
               <Header />
               <div className='home-container'>
                    <div className='banner'>
                         <h1>Pré-au-lard</h1>
                    </div>

                    <div className='card1'>
                         <div className='content'>
                              <h2>Bienvenu au village sorcier de Pré-au-lard !</h2>
                              <p>Situé au pied de Poudlard, le Pré-au-Lard est un
                                   charmant village exclusivement habité par des 
                                   sorciers. Avec ses ruelles pavées, ses boutiques 
                                   enchantées et ses légendes vivantes, il est un incontournable 
                                   pour tout visiteur du monde magique.
                              </p>
                              <p>📍 Adresse : Quelque part en Écosse</p>
                              <p>Blotti dans les Highlands écossais, tout près du château de Poudlard,
                                   ce village entièrement sorcier demeure introuvable pour les Moldus.
                                   Son emplacement exact n’est connu que de ses habitants. 
                                   Et même si vous pensiez savoir où chercher, il vous serait impossible
                                   de le voir : le Pré-au-Lard est protégé par de puissants enchantements
                                   qui le rendent totalement invisible aux yeux moldus.
                              </p>
                         </div>
                    </div>

                    <div className='card2'>
                         <div className='map' style={{ position: "relative", margin: "0 auto" }}>
                              <img
                                   src={imageHogsmeade}
                                   alt="Carte de Pré-au-lard"
                                   style={{display: "block", borderRadius: 8 }}
                              />
                         
                              {Array.isArray(points) && points.map(point => {
                                   const pos = getPosition(point.latitude, point.longitude);
                                   return (
                                        <React.Fragment key={point.id}>
                                             <div
                                                  style={{
                                                       position: "absolute",
                                                       left: point.latitude+"%",
                                                       top: point.longitude+"%",
                                                       transform: "translate(-50%, -50%)",
                                                       width: 15,
                                                       height: 15,
                                                       borderRadius: "50%",
                                                       background: point.color || "#6c63ff",
                                                       border: "2px solid #fff",
                                                       cursor: "pointer",
                                                       boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                                       zIndex: 2,
                                                       display: "flex",
                                                       alignItems: "center",
                                                       justifyContent: "center"
                                                  }}
                                                  onMouseEnter={() => setHoveredPoint(point)}
                                                  onMouseLeave={() => setHoveredPoint(null)}
                                                  onClick={() => window.location.href = `/place/${point.category.slug}/${point.slug}`}
                                                  title={point.title}
                                             >
                                                  <span style={{ color: "#fff", fontWeight: "bold" }}>•</span>
                                             </div>
                                             {hoveredPoint && hoveredPoint.id === point.id && (
                                                  <div
                                                       style={{
                                                            position: "absolute",
                                                            left: point.latitude+"%",
                                                            top: (parseFloat(point.longitude) + 3) + "%",
                                                            transform: "translate(-50%, 0)",
                                                            background: "#fff",
                                                            border: "1px solid #ddd",
                                                            borderRadius: 8,
                                                            padding: "10px 16px",
                                                            minWidth: 180,
                                                            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                                                            zIndex: 10,
                                                            pointerEvents: "none"
                                                       }}
                                                  >
                                                       <strong>{point.title}</strong>
                                                       <div style={{ fontSize: 13, color: "#444", marginTop: 4 }}>
                                                            <div dangerouslySetInnerHTML={{ __html: truncateHTML(point.content, 200) }} />
                                                       </div>
                                                  </div>
                                             )}
                                        </React.Fragment>
                                   );
                              })}
                         </div>
                    </div>

                    <div className='card3'>
                         <div className='content'>
                              <h2>Liste des lieux</h2>
                              <div className='list-items'>
                                   {Array.isArray(points) && points.length > 0 ? (
                                        points.map(place => (
                                             <div className='item' key={place.id}>
                                                  <a href={`/place/${place.category.slug}/${place.slug}`} className='item' key={place.id}>
                                                  <img src={"http://localhost:8000/api/storage/" + place.img_preview} alt={place.title} style={{ objectFit:'cover', borderRadius:8}} />
                                                  <div className='catego-titre'>
                                                       <h3>{place.title}</h3>
                                                       <p dangerouslySetInnerHTML={{ __html: truncateHTML(place.content, 700) }} />
                                                  </div>
                                                  </a>
                                             </div>
                                        ))
                                   ) : (
                                        <p>Aucun lieu à afficher.</p>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     );
}

export default Home;
