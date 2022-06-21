import React from "react";
import {
  AccountIcon,
  EditProfileIcon,
  LockIcon,
  ProfileSheetIcon,
} from "../../../../__modules/Vectors";
import { useRouter } from "next/router";

const ProfileMenuModal = () => {
  const router = useRouter();
  return (
    <div className="mt-20 bg-white w-72 rounded-2xl absolute right-0 mx-5 z-10 mobile:mt-32">
      <div className="flex flex-col bg-primary text-white justify-start py-3 px-3 rounded-t-2xl">
        <p>Hello G-Tech</p>
        <p className="font-thin">Available</p>
      </div>
      <div className="border-b border-white rounded-b-2xl">
        <div className="flex py-3 border-t border-primary border-opacity-30 items-center hover:bg-primary hover:bg-opacity-20 transition-all cursor-pointer">
          <div className="bg-primary p-4 mx-2 rounded-xl bg-opacity-30">
            <ProfileSheetIcon className="text-primary" />
          </div>
          <div className="px-5 flex flex-col w-full">
            <p className="font-semibold">My Profle</p>
            <p className="text-xs text-gray-500">
              View personal profile details
            </p>
          </div>
        </div>
        <div className="flex py-3 border-t border-primary border-opacity-30 items-center hover:bg-primary hover:bg-opacity-20 transition-all cursor-pointer">
          <div className="bg-primary p-4 mx-2 rounded-xl bg-opacity-30">
            <EditProfileIcon className="text-primary" />
          </div>
          <div className="px-5 flex flex-col w-full">
            <p className="font-semibold">Edit Profle</p>
            <p className="text-xs text-gray-500">
              Modify personal profile details
            </p>
          </div>
        </div>
        <div className="flex py-3 border-t border-primary border-opacity-30 items-center hover:bg-primary hover:bg-opacity-20 transition-all cursor-pointer">
          <div className="bg-primary p-4 mx-2 rounded-xl bg-opacity-30">
            <AccountIcon className="text-primary" />
          </div>
          <div className="px-5 flex flex-col w-full">
            <p className="font-semibold">My Profle</p>
            <p className="text-xs text-gray-500">
              Manage Your account parameter
            </p>
          </div>
        </div>
        <div
          onClick={() => router.push("/account/setting")}
          className="flex py-3 border-t border-primary border-opacity-30 items-center hover:bg-primary hover:bg-opacity-20 transition-all cursor-pointer"
        >
          <div className="bg-primary p-4 mx-2 rounded-xl bg-opacity-30">
            <LockIcon className="text-primary" />
          </div>
          <div className="px-5 flex flex-col w-full">
            <p className="font-semibold">Privacy Setting</p>
            <p className="text-xs text-gray-500">
              Control your privacy parameter
            </p>
          </div>
        </div>
        <div className="flex py-3 border-t border-primary border-opacity-30 justify-center items-center">
          <button className="bg-primary py-2 px-10 text-white rounded-md">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuModal;
