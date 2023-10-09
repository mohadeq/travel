import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate()

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:8000/api/users");
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section className="services mb">
      <div className="featured container">
        <div className="booking-table-container">
          <h1 style={{ marginBottom: "20px" }}>Users List</h1>
          <table className="booking-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Users;
