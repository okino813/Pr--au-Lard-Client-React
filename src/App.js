
// import './scss/app.scss';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import 'axios';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminUsers from "./admin-dashboard/pages/Users";
import AdminPlace from "./admin-dashboard/pages/Place";
import AdminPlaceCreate from "./admin-dashboard/pages/CreatePlace";
import AdminCategoryCreate from "./admin-dashboard/pages/CreateCategory";
import AdminCategory from "./admin-dashboard/pages/Category";
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
            <Route path="/admin/places" element={<AdminPlace />} />
            <Route path="/admin/place/create" element={<AdminPlaceCreate />} />
            <Route path="/admin/category/create" element={<AdminCategoryCreate />} />
            <Route path="/admin/category/" element={<AdminCategory />} />
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