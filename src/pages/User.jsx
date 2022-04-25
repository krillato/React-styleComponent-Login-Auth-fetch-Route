import React from "react";
import Navbar from "../components/Navbar";
import withAuth from "../components/hoc/withAuth";

function User() {
  return (
    <div w-full>
      <Navbar />
      <div className="flex justify-center m-[50px]">หน้าสำหรับUser</div>
    </div>
  );
}

export default withAuth(User);
