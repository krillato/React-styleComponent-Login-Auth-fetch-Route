import React, { useContext, useEffect } from "react";
import Authen from "../hooks/Authen";
import { AuthContext } from "../hooks/Authen";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Dashboard() {
  const { email, role, verifyToken } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div className="text-center m-[50px] items-center ">
        <p>email : {email}</p>
        <p>status : {role}</p>
        <p className="w-[120px] h-[60] border-2 m-auto mt-[35px]">
          <Link to="/Login">
            <button>Log out</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Authen(Dashboard);
