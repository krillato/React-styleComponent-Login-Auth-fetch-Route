import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
function DashboardUser() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <Navbar />
      <div className="text-center m-[50px] items-center ">
        <p>หน้าแรกสำหรับ User </p>

        <p className="w-[120px] h-[60] border-2 m-auto mt-[35px]">
          <Link to="/Login">
            <button onClick={() => handleLogout()}>Log out</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default DashboardUser;
