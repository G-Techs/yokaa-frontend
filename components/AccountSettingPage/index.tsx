import React, { useState } from "react";
import AccountSettings from "../modules/AccountSettings";
import PageCard from "../modules/layout/PageLayout";

const AccountSettingsPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <div className="bg-globalBg h-screen mobile:h-fit">
      <PageCard setIsTopNav={setIsTopNav}>
        <AccountSettings isTopNav={isTopNav} />
      </PageCard>
    </div>
  );
};

export default AccountSettingsPage;
