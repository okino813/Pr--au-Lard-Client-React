import React, { useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.access_token);
      window.location.href = "/admin";
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la connexion.");
    }
  };

  return (
    <div className="Login">
      <Header />
      <div className="login-container">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
        <h2>Connexion</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
