import React from "react";

import withAuth from "../components/hoc/withAuth";
import DashboardUser from "../components/Dashboard/DashboardUser";
import DashboardAdmin from "../components/Dashboard/DashboardAdmin";
function Dashboard() {
  const role = localStorage.getItem("status");
  console.log(role);

  return <div>{role === "admin" ? <DashboardAdmin /> : <DashboardUser />}</div>;
}

export default withAuth(Dashboard);
