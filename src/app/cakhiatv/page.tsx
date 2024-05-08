"use client";
import Image from "next/image";
import React from "react";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
async function Home() {
  return (
    <main className="   bg-black  pb-20 ">
      <div className=" container mx-auto">
        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">
            Latest Movies
          </p>
          <ReactPlayer
            // config={{
            //   file: {
            //     hlsOptions: {
            //       forceHLS: true,
            //       debug: false,
            //       xhrSetup: function (xhr: any) {
            //         xhr.setRequestHeader(
            //           "referer",
            //           "https://watch.rkplayer.xyz"
            //         );
            //       },
            //     },
            //   },
            // }}
            width="100%"
            height="100%"
            url={"https://vip.opstream15.com/20220303/479_7ee7670b/index.m3u8"}
            controls
            playing={true}
            muted
            loop
          />
        </div>

        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">
            Horror Series
          </p>
        </div>

        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">
            Old Movies
          </p>
        </div>
      </div>
    </main>
  );
}
export default Home;
