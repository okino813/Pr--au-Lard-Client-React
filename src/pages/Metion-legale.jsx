import '../scss/app.scss';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


function MentionLegale() {

     return (
    <div className="legal-mentions bg-light min-vh-100">
  <Header />

  <div className="container py-5">
    <h1 className="text-center mb-5">Mentions légales</h1>

    <section className="mb-4">
      <h2 className="h5">Éditeur du site</h2>
      <p>
        Ce site est édité par l’<strong>Office de Tourisme de Pré-au-Lard</strong>  
        <br />
        Adresse : 1, rue des Trois Balais, 77890 Pré-au-Lard  
        <br />
        Email : <a href="mailto:contact@tourisme-preaulard.fr">contact@tourisme-preaulard.fr</a>  
        <br />
        Téléphone : 01 02 03 04 05
      </p>
    </section>

    <section className="mb-4">
      <h2 className="h5">Directeur de la publication</h2>
      <p>Madame Minerva McGonagall</p>
    </section>

    <section className="mb-4">
      <h2 className="h5">Hébergement</h2>
      <p>
        Hébergeur : HibouServe  
        <br />
        Adresse : 4 allée de la Volière, 75000 Londres Magique  
        <br />
        Email : <a href="mailto:support@hibouserve.com">support@hibouserve.com</a>
      </p>
    </section>

    <section className="mb-4">
      <h2 className="h5">Propriété intellectuelle</h2>
      <p>
        Le contenu de ce site (textes, images, logos, vidéos, etc.) est la propriété de l’Office de Tourisme de Pré-au-Lard,
        sauf mention contraire. Toute reproduction, totale ou partielle, est interdite sans autorisation préalable.
      </p>
    </section>

    <section className="mb-4">
      <h2 className="h5">Données personnelles</h2>
      <p>
        Les données personnelles collectées via ce site sont utilisées uniquement pour la gestion des demandes de contact
        et d'information. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression
        de vos données. Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@tourisme-preaulard.fr">contact@tourisme-preaulard.fr</a>.
      </p>
    </section>

    <section className="mb-4">
      <h2 className="h5">Cookies</h2>
      <p>
        Ce site peut utiliser des cookies à des fins statistiques ou pour améliorer votre expérience utilisateur. Vous pouvez
        configurer votre navigateur pour refuser ces cookies si vous le souhaitez.
      </p>
    </section>
  </div>

  <Footer />
</div>



     );
}

export default MentionLegale;
