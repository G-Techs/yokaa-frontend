import React from "react";
import { useState } from "react";
import AddNewSinger from "../modules/AddNewSinger";
import PageCard from "../modules/__modules__/Card/PageCard";

const AddNewSongPage = () => {
  const [isTopNav, setIsTopNav] = useState(false);
  return (
    <PageCard setIsTopNav={setIsTopNav}>
      <AddNewSinger />
    </PageCard>
  );
};
export default AddNewSongPage;
