import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("status");
  return (
    <div className="w-full h-[100px] border-2 bg-slate-400">
      <ul className="flex justify-between  m-[25px] text-[30px]">
        {role === "admin" ? (
          <>
            <Link to="/dashboard">
              <li>Home</li>
            </Link>
            <Link to="/Member">
              <li>Member</li>
            </Link>
            <Link to="/Admin">
              <li>Admin</li>
            </Link>
            <Link to="/login">
              <li>LOGOUT</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <li>Home</li>
            </Link>

            <Link to="/User">
              <li>User</li>
            </Link>
            <Link to="/login">
              <li>LOGOUT</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
