import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {  
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <Link to="/dashboard"
        class="h3 mb-0 text-gray-800">Dashboard</Link>
        <a
          href="https://www.google.com"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
