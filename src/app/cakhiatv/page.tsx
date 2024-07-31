"use client";

import dynamic from "next/dynamic";

const film = [1, 23, 4, 5, , 4, 675, 76, 23, 4, 5, , 4, 675, 76, 57, 5, 67];

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
function Home() {
  return (
    <main className='   bg-black text-white  pb-20 '>
      <div className=' container mx-auto'>
        <div className=' flex flex-row  '>
          <div className='w-[80%]'>
            <ReactPlayer
              width='100%'
              height='100%'
              url={"https://vip.opstream17.com/20240509/7144_5ed83f73/index.m3u8"}
              controls
              playing={true}
              muted
              loop
            />
          </div>

          <div className='flex-1  scrollmenu    h-[700px] '>
            {film.map((item, index) => (
              <div className='flex  hover:text-green-500 p-2   hover:bg-[#23252b] bg-[#1A1C21]   py-2   items-center  '>
                <img src='/imageRight.jpg' className='w-[40%]  rounded-md ' alt='' />
                <span className=' text-xs '>Tam tuyến luân hồi</span>
              </div>
            ))}
          </div>
        </div>

        <div className=' '>
          <p className=' text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl'>
            Horror Series
          </p>
        </div>

        <div className=' '>
          <p className=' text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl'>
            Old Movies
          </p>
        </div>
      </div>
    </main>
  );
}
export default Home;
