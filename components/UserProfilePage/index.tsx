import { useState, FC } from "react";
import PageLayout from "@/components/modules/layout/PageLayout";
import { dailySalesData } from "../dummy_data/dailySalesData";
import UserProfile from "../modules/UserProfile";

const UserProfilePage: FC<{ dailySales: typeof dailySalesData }> = ({ dailySales }) => {
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <div className="bg-globalBg h-screen mobile:h-fit">
      <PageLayout setIsTopNav={setIsTopNav}>
        <UserProfile isTopNav={isTopNav} dailySales={dailySales} />
      </PageLayout>
    </div>
  );
};

export default UserProfilePage;
