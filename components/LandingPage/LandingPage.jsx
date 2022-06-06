import React from "react";
import { TopNav, LeftNav } from "../modules/NavBar";
import { useRecoilValue } from "recoil";
import { leftNavPinedAtom } from "../lib/atoms";

const LandingPage = () => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);

  return (
    <>
      <div
        className={`relative flex flex-col ${
          !isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
        } mobile:ml-5`}
      >
        <TopNav />
        {/* All the landing page components with be here */}
        <p className="mt-20 text-center">This is the test paragraph</p>
      </div>
      <LeftNav />
    </>
  );
};

export default LandingPage;
