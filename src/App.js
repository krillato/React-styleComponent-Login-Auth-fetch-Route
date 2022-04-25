import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import BtnChange from "./pages/BtnChange";
import Member from "./pages/Member";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Main from "./components/Test/Main";
import User from "./pages/User";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/BtnChange" element={<BtnChange />} />
            <Route path="/User" element={<User />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Test" element={<Main />} />

            <Route path="/Member" element={<Member />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
