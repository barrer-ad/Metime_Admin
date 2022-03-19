import React, { useContext, useState, useEffect } from "react";
import "../Dashbord/Navbar.css";
import api from "../api/db";
import ListUsers from "../Users/ListUsers";
import {
  Router,
  Switch,
  NavLink,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { AuthContext } from "../Login/AuthContext";
import AddUsers from "../Users/AddUsers";
import EditUser from "../Users/EditUsers";
import UserDetails from "../Users/UserDetails";

export default function Navbar() {
  // start login
  const authContext = useContext(AuthContext);
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }
  // end login

  // start user
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [serchResult, setSearchResult] = useState([]);

  const retriveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  const removeUsersHandler = async (id) => {
    await api.delete(`/users/${id}`);
    const newUsersList = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsersList);
  };
  const addUserHandler = async (user) => {
    const response = await api.post("/users", user);
    setUsers([...users, response.data]);
  };

  const editUsersHandler = async (user) => {
    const response = await api.put(`/users/${user.id}`, user);
    const { id, name, email, phone } = response.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...response.data } : user;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setSearch(searchTerm);
    if (searchTerm !== "") {
      const newSearchList = users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newSearchList);
    } else {
      setSearchResult(users);
    }
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retriveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);
  // end user
  return (
    <BrowserRouter>
      <div>
        <div className="dashboard">
          <div className="dashboard-nav">
            <header>
              <NavLink to="/" className="brand-logo">
                <span>
                  <img src="../img/me time logo-05 1 (1).png" alt="" />
                </span>
              </NavLink>
            </header>
            <nav className="dashboard-nav-list">
              <NavLink to="/" className="dashboard-nav-item">
                <img
                  className="m-1"
                  src="../img/icons8-home-24.png"
                  width="20"
                  height="20"
                />
                Home
              </NavLink>
              <NavLink to={"#"} className="dashboard-nav-item active">
                <img
                  className="m-1"
                  src="../img/icons8-dashboard-48.png"
                  width="20"
                  height="20"
                />
                dashboard
              </NavLink>
              <NavLink to={"#"} className="dashboard-nav-item">
                <img
                  className="m-1"
                  src="../img/icons8-upload-48.png"
                  width="20"
                  height="20"
                />
                Upload
              </NavLink>
              <div className="dashboard-nav-dropdown">
                <NavLink
                  to={"#"}
                  className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                >
                  <img
                    className="m-1"
                    src="../img/icons8-users-99.png"
                    width="20"
                    height="20"
                  />
                  Users
                </NavLink>
              </div>
              <div className="dashboard-nav-dropdown">
                <NavLink
                  to={"#"}
                  className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                >
                  <img
                    className="m-1"
                    src="../img/icons8-card-payment-50.png"
                    width="20"
                    height="20"
                  />
                  Payments
                </NavLink>
              </div>
              <NavLink to={"#"} className="dashboard-nav-item">
                <img
                  className="m-1"
                  src="../img/icons8-setting-48.png"
                  width="20"
                  height="20"
                />
                Settings
              </NavLink>
              <NavLink to={"#"} className="dashboard-nav-item">
                <img
                  className="m-1"
                  src="../img/icons8-admin-settings-male-50.png"
                  width="20"
                  height="20"
                />
                Profile Admins
              </NavLink>
              <div className="nav-item-divider"></div>
              <NavLink to="#" className="dashboard-nav-item" onClick={logout}>
                <img
                  className="m-1"
                  src="../img/icons8-logout-48.png"
                  width="20"
                  height="20"
                />
                Logout
              </NavLink>
            </nav>
          </div>
          <div className="dashboard-app">
            <div className="dashboard-content">
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <h1>Welcome {authContext.auth.email}</h1>
                  </div>
                  <div className="card-body">
                    <Switch>
                      {/* users list */}
                      <Route
                        path="/"
                        exact
                        render={(props) => (
                          <ListUsers
                            {...props}
                            users={search.length < 1 ? users : serchResult}
                            getUsersId={removeUsersHandler}
                            term={search}
                            searchKeyWord={searchHandler}
                          />
                        )}
                      />
                      <Route
                        path="/add"
                        render={(props) => (
                          <AddUsers
                            {...props}
                            addUserHandler={addUserHandler}
                          />
                        )}
                      />
                      <Route
                        path="/edit/:id"
                        render={(props) => (
                          <EditUser
                            {...props}
                            editUsersHandler={editUsersHandler}
                          />
                        )}
                      />
                      <Route path="/user/:id" component={UserDetails} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
