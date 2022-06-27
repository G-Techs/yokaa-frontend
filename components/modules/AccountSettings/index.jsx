import React from "react";
import PropsTypes from "prop-types";

const AccountSettings = ({ isTopNav }) => {
  return (
    <div
      className={`mt-24 h-full flex justify-center mobile:flex-col mobile:mr-5 mobile:pb-40 transition-all ${
        isTopNav && "mobile:mt-40 transition-all"
      }`}
    >
      <div className="w-full border border-gray-200 p-10 bg-white shadow-sm rounded-md h-fit">
        <h3 className="text-2xl font-bold py-5 border-b border-gray-200">
          Account Setting
        </h3>
        <div>
          <div className="flex flex-col pt-4">
            <label htmlFor="userName" className="py-3">
              User name:
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Ilunga Mbidi"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="py-3">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="ilungambidi243@gmail.com"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="altarnateEmail" className="py-3">
              Alternate Email:
            </label>
            <input
              type="email"
              name="altarnateEmail"
              placeholder="ilungambidi@gmail.com"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
          <button className="mt-5 py-2 px-20 mobilesm:w-full rounded-md bg-primary bg-opacity-80 hover:bg-opacity-100 transition-all font-bold text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full border border-gray-200 p-10 bg-white shadow-sm rounded-md mx-5 mobile:mx-0 mobile:mt-5">
        <h3 className="text-2xl font-bold py-5 border-b border-gray-200">
          Social Media
        </h3>
        <div>
          <div className="flex flex-col pt-4">
            <label htmlFor="facebook" className="py-3">
              Facebook:
            </label>
            <input
              type="url"
              name="facebook"
              placeholder="Ilunga Mbidi"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
          <div className="flex flex-col pt-4 h-fit">
            <label htmlFor="tweeter" className="py-3">
              Tweeter:
            </label>
            <input
              type="url"
              name="tweeter"
              placeholder="https://www.tweeter/mbidi243"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="instagram" className="py-3">
              Instagram:
            </label>
            <input
              type="url"
              name="instagram"
              placeholder="https://www.instagram/mbidi.officiel"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="youtube" className="py-3">
              Youtube:
            </label>
            <input
              type="url"
              name="youtube"
              placeholder="https://www.youtube/mbidi.officiel"
              className="py-2 px-3 bg-transparent border border-gray-200 outline-none focus:border-primary rounded-md transition-all"
            />
          </div>
        </div>
        <button className="mt-5 py-2 px-20 rounded-md mobilesm:w-full bg-primary bg-opacity-80 hover:bg-opacity-100 transition-all font-bold text-white">
          Submit
        </button>
      </div>
    </div>
  );
};



export default AccountSettings;
