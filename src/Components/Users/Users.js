import React, { useEffect, useState } from "react";
import api from "../api/db";
import ListUsers from "./ListUsers";

export default function Users() {
  const [users, setUsers] = useState([]);

  const retriveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retriveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);
  return (
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       exact
    //       // element={<ListUsers users={users} />}
    //       render={(props) => <ListUsers {...props} users={users} />}
    //     />
    //   </Routes>
    // </Router>
    <div>
      <ListUsers users={users} />
    </div>
  );
}
