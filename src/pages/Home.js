import '../scss/app.scss';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import imageHogsmeade from '../assets/images/hogsmeade.png'

function Home() {
// Exemple de points à placer sur la carte
const points = [
     {
          id: 1,
          name: "Honeydukes",
          description: "La confiserie la plus célèbre du Pré-au-Lard, réputée pour ses friandises magiques...",
          x: "61%",
          y: "65%",
          link: "/blog/honeydukes",
          color: "pink"
     },
     {
          id: 2,
          name: "Les Trois Balais",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "38%",
          y: "68%",
          link: "/blog/les-trois-balais",
          color: "orange"
     },
     {
          id: 3,
          name: "Bureau de poste",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "53%",
          y: "64%",
          link: "/blog/les-trois-balais",
          color: "yellow"
     },
     {
          id: 4,
          name: "La Cabane hurlante",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "61%",
          y: "95%",
          link: "/blog/les-trois-balais",
          color: "black"
     },
     {
          id: 5,
          name: "La Cabane hurlante",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "61%",
          y: "95%",
          link: "/blog/les-trois-balais",
          color: "black"
     },
     {
          id: 6,
          name: "Zonko",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "64%",
          y: "70%",
          link: "/blog/les-trois-balais",
          color: "green"
     },
     {
          id: 7,
          name: "Gaichiffon",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "68%",
          y: "76%",
          link: "/blog/les-trois-balais",
          color: "grey"
     },
     {
          id: 8,
          name: "Scribenpenne",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "70%",
          y: "81%",
          link: "/blog/les-trois-balais",
          color: "white"
     },
     {
          id: 9,
          name: "Madame Pieddodu",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "52%",
          y: "87%",
          link: "/blog/les-trois-balais",
          color: "purple"
     },
     {
          id: 10,
          name: "La Tête de Sanglier",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "68%",
          y: "95%",
          link: "/blog/les-trois-balais",
          color: "brown"
     },
     {
          id: 11,
          name: "Derviche et Bang",
          description: "Le pub incontournable pour déguster une Bièraubeurre bien fraîche...",
          x: "42%",
          y: "47%",
          link: "/blog/les-trois-balais",
          color: "darkblue"
     }
     
     // Ajoutez d'autres points ici
];

const [hoveredPoint, setHoveredPoint] = React.useState(null);

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
                    <div className='map' style={{ position: "relative", width: "100%", maxWidth: 600, margin: "0 auto" }}>
                         <img
                              src={imageHogsmeade}
                              alt="Carte de Pré-au-lard"
                              style={{ width: "100%", display: "block", borderRadius: 8 }}
                         />
                         {points.map(point => (
                              <React.Fragment key={point.id}>
                                   <div
                                        style={{
                                             position: "absolute",
                                             left: point.x,
                                             top: point.y,
                                             transform: "translate(-50%, -50%)",
                                             width: 24,
                                             height: 24,
                                             borderRadius: "50%",
                                             background: point.color,
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
                                        onClick={() => window.location.href = point.link}
                                        title={point.name}
                                   >
                                        <span style={{ color: "#fff", fontWeight: "bold" }}>•</span>
                                   </div>
                                   {hoveredPoint && hoveredPoint.id === point.id && (
                                        <div
                                             style={{
                                                  position: "absolute",
                                                  left: point.x,
                                                  top: `calc(${point.y} + 30px)`,
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
                                             <strong>{point.name}</strong>
                                             <div style={{ fontSize: 13, color: "#444", marginTop: 4 }}>
                                                  {point.description}
                                             </div>
                                        </div>
                                   )}
                              </React.Fragment>
                         ))}
                    </div>
               </div>

               <div className='card3'>
                    <div className='content'>
                         <h2>Cela peut vous intéresser</h2>
                         <div className='list-items'>
                              <div className='item'>
                                   <img src='https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-honeydukes-exterior-b.jpg' alt='Honeydukes' />
                                   <div className='catego-titre'>
                                        <h3>Honeydukes</h3>
                                        <p>La confiserie la plus célèbre du Pré-au-Lard</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <Footer />
     </div>
);
}

export default Home;
