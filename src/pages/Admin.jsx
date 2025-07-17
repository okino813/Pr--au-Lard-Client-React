import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AdminSidebar from "../admin-dashboard/components/Sidebar";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const res = await axios.get("http://localhost:8000/api/currentuser", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        console.log(res.data.data.user)

        setUser(res.data.data.user);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);


  if (loading) return <p>Chargement...</p>;

  return (
    <div className="Admin">
      <Header />
      <div className="headerAdmin">
        <AdminSidebar />
        <div className="main">

            <div className="content">

              <div className="card">
                <h2>📊 Statistiques</h2>
                <p>Nombre d’utilisateurs : 124</p>
                <p>Articles publiés : 58</p>
              </div>

              <div className="card">
                <h2>📝 Derniers articles</h2>
                <ul>
                  <li>→ Comment sécuriser un site Laravel</li>
                  <li>→ Nouveautés du dashboard admin</li>
                  <li>→ Guide : créer une API REST</li>
                </ul>
              </div>
            </div>
          </div>
     </div>

      

      <Footer />
    </div>
  );
};

export default Admin;
