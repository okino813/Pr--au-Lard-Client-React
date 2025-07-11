import logo from '../assets/images/logo.jpg';
import '../scss/app.scss';
function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
            <div className='divleft'>
                 <img src={logo} className="Header-logo" alt="logo" />
                 <h1 className="Header-title">Le village de Pré-au-lard</h1>
            </div>

            <div className='divright'>
               <p><a href="#">Accueil</a></p>
               <p><a href="#">Qui somme nous ?</a></p>
               <p><a href="#">Blog</a></p>
          </div>
      </header>
    </div>
  );
}

export default Header;
