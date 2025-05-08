import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f3f3f3" }}>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
        <Link to="/products" style={{ marginRight: "10px" }}>Products</Link>
        <Link to="/admin" style={{ marginRight: "10px" }}>Admin Panel</Link>
        <Link to="/admin/purchases" style={{ marginRight: "10px" }}>Purchases</Link>
        <Link to="/admin/winners">Winners</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
