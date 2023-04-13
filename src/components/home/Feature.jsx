import React from "react";
import { feature } from "../../data/Data";

const Feature = () => {
  return (
    <>
      <div className="flex items-center bg-gray-900 p-4 ">
        <div className="border-t border-white flex-grow"></div>
        <div className="mx-4 text-white text-center">Features</div>
        <div className="border-t border-white flex-grow"></div>
      </div>

      <div className="grid xl:grid-cols-5  md:grid-cols-4 grid-cols-2 p-4 h-[600px] gap-3 bg-gray-900 place-items-center">
        {feature.map((item, index) => (
          <div className="bg-gray-900">
            <div key={index} className="bg-gray-900">
              <a
                className="relative flex items-start justify-between rounded-xl border  p-4 shadow-xl sm:p-6 lg:p-8"
                href="#"
              >
                <div className="pt-4 text-gray-500">
                  <img className="w-20" src={item.image} alt="" srcset="" />

                  <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 hidden text-sm sm:block text-white">
                    {item.description}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feature;
