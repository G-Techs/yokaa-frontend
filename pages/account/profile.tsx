import React from "react";
import { dailySalesData } from "@/components/dummy_data/dailySalesData";
import UserProfilePage from "@/components/UserProfilePage";

const profile = () => {
  return <UserProfilePage dailySales={dailySalesData} />;
};

export default profile;
