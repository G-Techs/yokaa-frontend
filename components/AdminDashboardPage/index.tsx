import React, { useState } from "react";
import AdminDashboard from "../modules/AdminDashboard";
import PageCard from "../modules/layout/PageLayout";

const AdminDashboardPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <PageCard setIsTopNav={setIsTopNav}>
      <AdminDashboard isTopNav={isTopNav} />
    </PageCard>
  );
};

export default AdminDashboardPage;
