import React from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center h-full">
      <div className="flex flex-col items-center h-fit w-fit m-auto px-10 mobilexs:px-2 mobilexs:py-2 transition-all rounded-md mobile:px-5 mobile:py-5 py-10 backdrop-blur-2xl bg-white bg-opacity-10 text-white">
        <div>
          <h1 className="text-3xl text-center">Yokaa</h1>
          <h1 className="text-4xl font-bold text-center pt-3">Log In</h1>
        </div>
        <div>
          <form className="flex flex-col">
            <div className="flex flex-col py-2">
              <label htmlFor="email" className="py-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="bg-transparent border border-white px-3 w-[500px] mobile:w-96 mobilesm:w-80  mobilexs:w-72  transition-all py-2 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="password" className="py-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="bg-transparent border border-white px-3 w-[500px] mobile:w-96 mobilesm:w-80  mobilexs:w-72  transition-all py-2 rounded-md outline-none"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-start w-[-webkit-fill-available] py-2">
          You don&apos;t have an account ?
          <span
            className="text-primary text-left px-2 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </span>
        </div>
        <button className="bg-primary hover:bg-opacity-80 transition-all w-full py-3 mt-3 rounded-lg text-white">
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
