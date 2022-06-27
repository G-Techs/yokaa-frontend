import React from "react";
import { useState } from "react";
import AddCategory from "../modules/AddCategory";
import PageCard from "../modules/__modules__/Card/PageCard";

const AddCategoryPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <PageCard setIsTopNav={setIsTopNav}>
      <AddCategory isTopNav={isTopNav} />
    </PageCard>
  );
};
export default AddCategoryPage;
