import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Member from "../pages/Member";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";

import User from "../pages/User";

import Create from "../pages/Create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="create" element={<Create />} />

          <Route path="Member" element={<Member />} />
          <Route path="Admin" element={<Admin />} />

          <Route path="user" element={<User />} />

          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
