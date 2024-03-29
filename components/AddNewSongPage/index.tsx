import React from "react";
import { useState } from "react";
import AddNewSinger from "../modules/AddNewSinger";
import PageCard from "../modules/layout/PageLayout";

const AddNewSongPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <PageCard setIsTopNav={setIsTopNav}>
      <AddNewSinger />
    </PageCard>
  );
};
export default AddNewSongPage;
