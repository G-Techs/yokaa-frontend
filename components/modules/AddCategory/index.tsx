import React from "react";

const AddCategory = () => {
  return (
    <>
      <div className="my-24 bg-white flex flex-col shadow-lg mr-5 rounded-xl pt-2">
        <div className="flex justify-between items-center pb-5 border-b">
          <h2 className="font-bold text-2xl text-gray-700 pl-5 pt-3">
            Add Categories
          </h2>
        </div>
        <form className="flex flex-col px-2 py-4 gap-2">
          <div className="flex flex-col px-2 w-full">
            <label htmlFor="category-name" className="pb-2">
              choose a name
            </label>
            <input
              type="text"
              name="category-name"
              className="bg-transparent border  px-3 transition-all py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col px-2 ">
            <label htmlFor="category-name" className="py-2">
              Category Description:
            </label>
            <textarea
              name="category-name"
              cols={20}
              rows={6}
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


export default AddCategory;
