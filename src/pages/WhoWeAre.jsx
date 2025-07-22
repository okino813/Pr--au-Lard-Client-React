import '../scss/app.scss';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


function WhoWeAre() {

     return (
        <div className="WhoWeAre">
  <Header />
  <div className='whoweare-container'>
    <div className='content'>
      <h1>Qui sommes-nous ?</h1>
      <div className='list-items'>
        <p>
          Bienvenue à l’Office de Tourisme de Pré-au-Lard, le seul village entièrement sorcier de Grande-Bretagne !
          Notre mission est de faire découvrir aux visiteurs – qu’ils soient sorciers ou moldus – les merveilles de ce
          lieu emblématique, connu pour ses boutiques ensorcelantes, ses paysages pittoresques et son atmosphère magique.
        </p>
        <p>
          Nous sommes là pour vous guider dans l’organisation de votre séjour : visites guidées, événements spéciaux,
          hébergements, conseils gourmands (un petit détour chez Honeydukes ou aux Trois Balais ?)… Vous trouverez chez nous
          toutes les informations nécessaires pour une expérience inoubliable à Pré-au-Lard.
        </p>
        <p>
          N’hésitez pas à venir nous rencontrer à notre guichet ou à consulter notre application pour rester informé des
          nouveautés du village !
        </p>
      </div>
    </div>
  </div>
  <Footer />
</div>

     );
}

export default WhoWeAre;
