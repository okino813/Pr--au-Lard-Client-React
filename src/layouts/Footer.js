import logo from '../assets/images/logo.jpg';
import '../scss/app.scss';
function Footer() {
  return (
    <div className="Footer">
      <footer className="Footer-footer">
        <div className='line'>
            <div className='divleft'>
                 <img src={logo} className="Header-logo" alt="logo" />
            </div>

            <div className='divright'>
               <p><a href="#">Accueil</a></p>
               <p><a href="#">Qui somme nous ?</a></p>
               <p><a href="#">Blog</a></p>
               <p><a href="#">Mentions légales</a></p>
               <p><a href="#">Contacter le gérant du site</a></p>
               <p><a href="admin/">Espace Administrateur</a></p>
            </div>
          </div>

          <p>© 2025 Village de Pré-au-lard</p>
      </footer>
    </div>
  );
}

export default Footer;
