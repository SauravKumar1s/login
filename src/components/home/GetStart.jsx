import React from "react";
import { getStart } from "../../data/Data";

const GetStart = () => {
  return (
    <>
      <div className="bg-gray-900  h-[400px] pt-12">
        
        <h1 className="text-3xl text-white text-center mb-4">Get Started !</h1>

        <div className="flex flex0 justify-center bg-gray-900">
          <div className="flex    items-center">
            {getStart.map((item) => (
              <div className="bg-white flex flex-wrap">
                <a
                  key={item.id}
                  className="relative sm:w-[200px] flex items-center justify-center rounded-xl border p-4 shadow-xl sm:p-6 lg:p-4"
                  href="#"
                >
                  <div className="pt-4 text-gray-500">
                    <h3 className="mt-0 text-lg font-bold text-black sm:text-xl">
                      {item.no}
                    </h3>
                    <h3 className="mt-4  font-bold text-black text-xs">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Sign up
          </a>
        </div>
      </div>
      <div>

      <h1 className="text-xl bg-gray-900 text-white text-center pb-4">Terms · Privacy · FAQ · Github</h1>
        
      </div>
    </>
  );
};

export default GetStart;
