
// import './scss/app.scss';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import 'axios';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminUsers from "./admin-dashboard/pages/Users";
import AdminBlog from "./admin-dashboard/pages/Blog";
import AdminBlogCreate from "./admin-dashboard/pages/CreatePost";
import AdminCategoryCreate from "./admin-dashboard/pages/CreateCategory";
import Test from "./admin-dashboard/pages/Test";

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
            <Route path="/admin/place/create" element={<AdminBlogCreate />} />
            <Route path="/admin/category/create" element={<AdminCategoryCreate />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;