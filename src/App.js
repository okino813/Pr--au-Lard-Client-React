
// import './scss/app.scss';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import 'axios';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminUsers from "./admin-dashboard/pages/Users";
import AdminBlog from "./admin-dashboard/pages/Blog";

function App() {

  const token = localStorage.getItem("token");


  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;