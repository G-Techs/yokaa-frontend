import React from "react";
import { LeftNav, TopNav } from "../modules/NavBar";

const LandingPage = () => {
  return (
    <>
      <div className="absolute left-16">
        <TopNav />
      </div>
      <LeftNav />
    </>
  );
};

export default LandingPage;
