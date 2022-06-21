import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import BottomPlayer from "../BottomPaler/BottomPalyer";
import { leftNavPinedAtom } from "../lib/atoms";
import AccountSettings from "../modules/AccountSettings";
import { LeftNav, TopNav } from "../modules/NavBar";

const AccountSettingsPage = () => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <div className="bg-globalBg h-screen mobile:h-fit">
      <div
        className={`relative flex flex-col ${
          !isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
        } mobile:ml-5`}
      >
        <TopNav setIsTopNav={setIsTopNav} />
        <AccountSettings isTopNav={isTopNav} />
      </div>
      <LeftNav />
      <BottomPlayer />
    </div>
  );
};

export default AccountSettingsPage;
