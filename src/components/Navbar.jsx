import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/Authen";

function Navbar() {
  const { role, verifyToken } = useContext(AuthContext);
  useEffect(() => {
    verifyToken();
  }, [verifyToken]);
  if (role === "user") {
    return (
      <div className="w-full h-[100px] border-2 bg-slate-400">
        <ul className="flex justify-between  m-[25px] text-[30px]">
          <Link to="/User/dashboard">
            <li>Home</li>
          </Link>
          <Link to="/User/user">
            <li>User</li>
          </Link>
          <Link to="/login">
            <li>LOGOUT</li>
          </Link>
        </ul>
      </div>
    );
  }
  if (role === "admin") {
    return (
      <div className="w-full h-[100px] border-2 bg-slate-400">
        <ul className="flex justify-between  m-[25px] text-[30px]">
          <Link to="/AdminStatus/dashboard">
            <li>Home</li>
          </Link>
          <Link to="/AdminStatus/Member">
            <li>Member</li>
          </Link>
          <Link to="/AdminStatus/Admin">
            <li>Admin</li>
          </Link>
          <Link to="/login">
            <li>LOGOUT</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
