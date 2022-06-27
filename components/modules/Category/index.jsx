import React from "react";
import { VPen, VTrash } from "../__modules/Vectors";
import Link from "next/link";

const Category = () => {
  return (
    <div className="my-24 bg-white flex flex-col mr-5 border shadow-lg rounded-lg">
      <div className="flex justify-between items-center px-5 py-5 border-b border-gray-200">
        <h3 className="font-bold text-2xl">Category Lists</h3>
        <Link href="/admin/addcategory">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Add New Category
          </button>
        </Link>
      </div>
      <div className="flex justify-between px-5 py-5">
        <div className="flex items-center">
          <label htmlFor="numberOfItem">Show</label>
          <select
            name="numberOfItem"
            className="px-2 mx-2 rounded-md outline-none border bg-transparent focus:border-primary transition-all"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p>entries</p>
        </div>
        <div>
          <label htmlFor="searchItem" className="px-4">
            Search:
          </label>
          <input
            type="search"
            name="searchItem"
            className="border border-gray-300 px-2 py-1 rounded-md outline-none focus:border-primary transition-all"
          />
        </div>
      </div>
      <div className="mr-5">
        <table className="border border-gray-300 w-full">
          <tr>
            <th className="border px-10 py-3">No</th>
            <th className="border px-10 py-3">Song Category</th>
            <th className="border px-10 py-3">Category Description</th>
            <th className="border px-10 py-3">Action</th>
          </tr>
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <tr key={index}>
                <td className="border px-5 py-5">{index + 1}</td>
                <td className="border px-5">Rock songs</td>
                <td className="border px-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                  !
                </td>
                <td className="border px-5">
                  <div className="flex justify-center items-center">
                    <button className="bg-primary p-2 rounded-lg text-white">
                      <VPen />
                    </button>
                    <button className="bg-primary p-2 rounded-lg text-white mx-2">
                      <VTrash />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Category;
