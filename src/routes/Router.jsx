import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

import Login from "../pages/Login";
import Member from "../pages/Member";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";

import User from "../pages/User";

import Create from "../pages/Create";

function App() {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route
              path="/AdminStatus"
              element={
                <>
                  <AdminRoute />
                  <Outlet />
                </>
              }
            >
              <Route path="Member" element={<Member />} />
              <Route path="Admin" element={<Admin />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route
              path="/User"
              element={
                <>
                  <UserRoute />
                  <Outlet />
                </>
              }
            >
              <Route path="user" element={<User />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
