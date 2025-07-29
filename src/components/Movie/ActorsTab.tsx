"use client";

import React from "react";
import ImageProxy from "@/components/Image";
import { Focus2 } from "@/assets/images";

interface Actor {
  name: string;
  profile_path: string;
}

interface ActorsTabProps {
  actors: Actor[];
}

const ActorsTab: React.FC<ActorsTabProps> = ({ actors }) => {
  return (
    <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-3">
      {actors.map((item: any, i: number) => (
        <a
          key={i}
          className="flex flex-col bg-[#1A1C21] mt-2 shadow-xl items-center gap-y-3 py-4"
        >
          <div className="flex flex-col w-[95%]">
            <div className="flex justify-start w-full mb-3 -mt-2 items-center">
              <div className="flex mr-2">
                <ImageProxy
                  width={16}
                  height={16}
                  src={item.profile_path}
                  alt="img"
                  className="h-16 w-16 rounded-full mr-2"
                />
              </div>

              <div className="flex flex-col gap-y-2 w-full text-white">
                <span>{item.name}</span>
                <div className="flex justify-between w-full">
                  <div className="flex justify-center items-center gap-x-2 text-gray-500 text-sm">
                    <span>Đạo diện</span>
                    <div className="w-[2px] h-3 bg-gray-500"></div>
                    <span>biên kịch</span>
                  </div>
                  <span className="text-sm mr-4 text-green-500">Khác</span>
                </div>
              </div>
            </div>

            <div className="flex w-[95%] items-center gap-x-4">
              <div className="flex flex-col w-full text-white font-semibold hover:text-green-500">
                <ImageProxy
                  alt="img"
                  className="object-cover hover:scale-105 transition duration-300 ease-in-out w-full h-80 drop-shadow-xl"
                  src={Focus2.src}
                />
                <p className="truncate w-44 mt-4">Tam Tuyến Luân Hồi</p>
              </div>

              <div className="flex flex-col w-full">
                <ImageProxy
                  alt="img"
                  className="object-cover hover:scale-105 transition duration-300 ease-in-out w-full h-80 drop-shadow-xl"
                  src={Focus2.src}
                />
                <p className="truncate w-44 text-white mt-4">Tam Tuyến Luân Hồi</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ActorsTab; 