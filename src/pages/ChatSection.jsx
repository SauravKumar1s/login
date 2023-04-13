import React from "react";

const ChatSection = () => {
  return (
    <div className=" mx-auto bg-black ">
      <div className="flex justify-between items-center  bg-gray-900 px-5 py-3">
        <div className="text-white font-semibold sm:text-xl text-sm">Video Title</div>
        <div className="flex items-center justify-center flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white rounded-full px-4 py-2 sm:pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center ">
              <button
                type="submit"
                className="bg-yellow-500 h-10 w-20 rounded-full text-white font-semibold flex items-center justify-center"
              >
                search
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="text-gray-300 sm:mr-5">User Name</div>
          <div className="bg-yellow-500 h-10 w-10 rounded-full text-white font-semibold flex items-center justify-center">
            U
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-[100%]">
        <div className="p-5">
          <video
            className="w-full"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
          ></video>
        </div>
        <div className="p-5 ">
          <div className="bg-gray-900  p-5">
            <div className="mb-3">
              <span className="text-white font-semibold text-xl mr-2">
                Chat
              </span>
            </div>
            <div className="bg-gray-800 rounded-lg p-5 h-80 overflow-y-auto">
              <div className="sm:w-12/2 border-l-2 px-5">
                <div className="w-full px-5 flex flex-col justify-between">
                  <div className="flex flex-col mt-5 ">
                    <div className="flex justify-end mb-4">
                      <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        Welcome to group everyone !
                      </div>
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>

                    <div className="flex justify-start mb-4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                        happy holiday guys!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <input
                className="w-full bg-gray-800 py-3 px-5 rounded-lg"
                type="text"
                placeholder="Type your message here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
