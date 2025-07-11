import '../scss/app.scss';
function Home() {
  return (
    <div className="Home">
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
                    <div className='map'>

                    </div>
               </div>

                <div className='card3'>
                    <div className='content'>
                         <h2>Cela peut vous intérésser</h2>

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
    </div>
  );
}

export default Home;
