import React from "react";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const sectionStyle = {
    backgroundImage: `url('https://cdn.pixabay.com/photo/2018/01/31/07/36/secret-3120483_640.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section style={sectionStyle}>
      <div className="flex md:flex-row flex-col items-center sm:justify-evenly justify-end h-screen mx-auto md:h-screen lg:py-0">
        <div className="sm:mb-0 mb-5">
          <h1 className="sm:text-6xl text-5xl  text-white"> this is saurav</h1>
          <h1 className="sm:text-3xl text-2xl text-center text-white">
            {" "}
            this is saurav
          </h1>
          <h1 className="sm:text-2xl text-xl text-center text-white">
            {" "}
            this is saurav
          </h1>
        </div>

        <div className="w-screen bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="flex">
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 px-4 text-gray-800 font-semibold border-b-4 border-green-400">
                    Login
                  </button>
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 px-4 text-gray-800 font-semibold">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-black">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="flex flex-col ">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <CgMail />
                  </span>
                </div>
              </div>

              <div className="flex flex-col ">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type="password"
                    name="email"
                    className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="****"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <RiLockPasswordLine />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary hover:underline dark:text-primary-500"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
