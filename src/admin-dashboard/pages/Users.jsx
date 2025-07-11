import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import AdminSidebar from "../../admin-dashboard/components/Sidebar";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => {
        setUsers(res.data.data.user);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="Admin">
        <Header />
        <div className="headerAdmin">
          <AdminSidebar />
          <div className="main">

            <div className="content">

            <h2 className="text-2xl font-bold mb-4">Liste des utilisateurs</h2>
              <table className="w-full text-left border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Prénom</th>
                    <th className="p-2 border">Nom</th>
                    <th className="p-2 border">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t">
                      <td className="p-2">{u.firstname}</td>
                      <td className="p-2">{u.lastname}</td>
                      <td className="p-2">{u.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
      
        </div>
     </div>
     <Footer />
  </div>

  );
};

export default Users;
