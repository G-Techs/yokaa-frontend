import React from "react";
import { useState } from "react";
import Singers from "../modules/Singers";
import PageLayout from "../modules/layout/PageLayout";

const SingerListPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);

  return (
    <PageLayout setIsTopNav={setIsTopNav}>
      <Singers isTopNav={isTopNav} />
    </PageLayout>
  );
};

export default SingerListPage;
