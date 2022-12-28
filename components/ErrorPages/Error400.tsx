import React from "react";
import { HomeSubMenuIcon } from "../modules/__modules/Vectors/index";
import error from "../../components/modules/static/images/404.png";
const Error400 = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-4xl p-4 text-center">
        <img src={error.src} alt="Not Found" className="w-8/12" />
        <h2 className="text-3xl font-extrabold pt-4">
          Oops! This Page is Not Found.
        </h2>
        <p className="p-3 text-base text-gray-400">
          The requested page dose not exist
        </p>
        <div className="flex justify-center items-center rounded-2xl text-white px-4 py-2 bg-primary mt-4 cursor-pointer">
          <HomeSubMenuIcon size={16} className="mr-2" />
          <p className="font-lighter text-base">Back to Home</p>
        </div>
      </div>
    </div>
  );
};

export default Error400;
