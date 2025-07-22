import '../scss/app.scss';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import imageHogsmeade from '../assets/images/hogsmeade.png'
import axios from 'axios';



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


     return (
          <div className="Blog">
               <Header />
               <div className='blog-container'>

                         <div className='content'>
                              <h1>Liste des articles</h1>
                              <div className='list-items'>
                                   {Array.isArray(points) && points.length > 0 ? (
                                        points.map(place => (
                                             <div className='item' key={place.id}>
                                                  <a href={`/place/${place.category.slug}/${place.slug}`} className='item' key={place.id}>
                                                  <img src={"http://localhost:8000/api/storage/" + place.img_preview} alt={place.title} style={{ objectFit:'cover', borderRadius:8}} />
                                                  <div className='catego-titre'>
                                                       <h3>{place.title}</h3>
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
               <Footer />
          </div>
     );
}

export default Home;
