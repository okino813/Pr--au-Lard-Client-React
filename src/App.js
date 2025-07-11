
import './scss/app.scss';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
