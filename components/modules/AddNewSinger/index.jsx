import React from "react";
import PropTypes from "prop-types";

const AddNewSinger = () => {
  return (
    <>
      <div className="my-24 mobile:mb-32 bg-white flex flex-col shadow-lg mr-5 rounded-xl pt-2">
        <div className="flex justify-between items-center pb-5 border-b">
          <h2 className="font-bold text-2xl text-gray-700 pl-5 pt-3">
            Add New singer
          </h2>
        </div>
        <form className="flex flex-col px-2 py-4 gap-2">
          <div className="flex flex-col px-2 w-full">
            <label for="singer-name" className="pb-2">
              singer name
            </label>
            <input
              type="text"
              name="singer-name"
              className="bg-transparent border  px-3 transition-all py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col px-2 w-full">
            <label for="profile" className="pb-2">
              Singer Profile:
            </label>
            <input
              type="file"
              name="profile"
              className="
                flex
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-gray-100
                hover:file:text-primary
                hover:file:bg-gray-100
                hover:file:shadow-lg
                bg-transparent border  px-3 transition-all py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col px-2 w-full">
            <label for="email" className="pb-2">
              singer email
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent border  px-3 transition-all py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col px-2 ">
            <label for="category-name" className="py-2">
              Singer Description:
            </label>
            <textarea
              name="category-name"
              cols="20"
              rows="6"
              className="bg-transparent border  px-3 transition-all py-4 rounded-md outline-none"
            />
          </div>
          <div className="flex capitalize right gap-4 px-2">
            <button className="bg-primary w-20 px-2 py-2 rounded-xl text-white font-medium ">
              submit
            </button>
            <button
              type="reset"
              className="bg-orange-600 w-20 px-2 py-2 rounded-xl text-white font-medium "
            >
              reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

AddNewSinger.propTypes = {
  isTopNav: PropTypes.bool.isRequired,
};
export default AddNewSinger;
