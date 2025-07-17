import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <h2>🛠️ Admin</h2>
      <a href="/admin">
        <span class="icon"></span> Tableau de bord
      </a>
      <a href="/admin/users">
        <span class="icon"></span> Utilisateurs
      </a>
      <a href="/admin/places">
        <span class="icon"></span> Articles
      </a>
      <a href="/admin/category">
        <span class="icon"></span> Categories
      </a>
      <a href="/admin/settings">
        <span class="icon"></span> Paramètres
      </a>
      <a href="#" onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }} className="text-red-600 hover:underline" style={{marginTop: 'auto', color: '#f87171'}}>
        <span class="icon"></span> Déconnexion
      </a>

    </aside>
  );
};

export default Sidebar;
