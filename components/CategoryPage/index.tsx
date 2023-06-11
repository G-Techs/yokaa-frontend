import React, { useState } from "react";
import Category from "../modules/Category";
import PageCard from "../modules/layout/PageLayout";

const CategoryPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);

  return (
    <PageCard setIsTopNav={setIsTopNav}>
      <Category isTopNav={isTopNav} />
    </PageCard>
  );
};

export default CategoryPage;
