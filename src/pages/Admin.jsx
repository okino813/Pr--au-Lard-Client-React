import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

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
      <h2>Bienvenue, {user.firstname}</h2>
      <p>Email : {user.email}</p>
      <p>Rôle : {user.isAdmin ? "Admin" : "Utilisateur"}</p>
      <Footer />
    </div>
  );
};

export default Admin;
