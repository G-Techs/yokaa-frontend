import React from "react";
import { useState } from "react";
import AddCategory from "../modules/AddCategory";
import PageCard from "../modules/layout/PageLayout";

const AddCategoryPage = () => {
  const [_, setIsTopNav] = useState(false);

  return (
    <PageCard setIsTopNav={setIsTopNav}>
      <AddCategory />
    </PageCard>
  );
};
export default AddCategoryPage;
