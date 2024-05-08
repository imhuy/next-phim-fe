"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { Focus2 } from "@/assets/images";

function Home() {
  const lstTag = [
    { name: "Trung  Quốc" },
    {
      name: "Hàn Quốc",
    },
    { name: "Mỹ" },
    {
      name: "Hàn Quốc",
    },
    {
      name: "Hàn Quốc",
    },
  ];
  const lstActor = [
    { name: "Trung  Quốc" },
    {
      name: "Hàn Quốc",
    },
    { name: "Mỹ" },
    {
      name: "Hàn Quốc",
    },
    {
      name: "Hàn Quốc",
    },
    {
      name: "Hàn Quốc",
    },
    {
      name: "Hàn Quốc",
    },
  ];
  return (
    <main className="     bg-black     pb-20 ">
      <div className="   ">
        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">
            Horror Series
          </p>
        </div>

        {/* content */}
        <div className="flex w-full  max-sm:flex-col-reverse text-sm  text-white">
          <div className="w-full  px-4  mt-10   h-full  relative text-white z-50   flex gap-8">
            <div className="flex flex-col gap-4">
              <h1 className=" font-extrabold text-2xl leading-10">
                Tam Tuyến Luân Hồi
              </h1>
              <div className="flex  items-center gap-x-2 text-sm ">
                <h3 className=" ">9.5</h3>
                <div className=" w-[2px] h-3 bg-gray-500"></div>
                <h3>T13</h3>
                <div className=" w-[2px] h-3 bg-gray-500"></div>
                <h3>2023</h3>
                <div className=" w-[2px] h-3 bg-gray-500"></div>
                <h3>1 giờ 50 phút</h3>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                {lstTag.map((tag, i) => (
                  <span key={i} className="  bg-gray-800 px-1 rounded-sm">
                    {tag.name}
                  </span>
                ))}
              </div>

              <span className=" text-gray-400 font-normal">
                Đạo diễn: <span className=" text-white"> Channel Choi</span>
              </span>
              <span className="flex flex-wrap text-gray-400 gap-2 font-normal">
                Diễn viên chính:
                {lstActor.map((tag, i) => (
                  <span key={i} className=" text-white   rounded-sm">
                    {tag.name} {i == lstActor.length - 1 ? "" : ","}
                  </span>
                ))}
              </span>

              <div className="flex flex-col gap-2">
                <span className=" text-gray-400 font-normal leading-6  line-clamp-6   ">
                  Mô tả:{" "}
                  <span className=" text-white   ">
                    Những người quyền lực trong thời cổ đại đã cất giữ những kho
                    báu được truyền từ thế hệ này sang thế hệ khác dưới nước, và
                    các thế hệ tương lai có thể thừa kế chúng. Gửi tiền và rút
                    tiền đều được hoàn thành dưới nước, có thể hiểu đơn giản là
                    ngân hàng dưới nước. Ngân hàng dưới nước đã được gia đình
                    của ba họ phụ trách từ thời cổ đại, và họ vẫn đang tham gia
                    vào hoạt động kinh doanh này trong thành phố. Nhưng 20 năm
                    trước, trong một lần “mở canh vàng” bình thường, chiếc nồi
                    vô tình bị lật, những xúc tu khổng lồ bất ngờ xuất hiện
                    trong hồ suýt chút nữa đã quét sạch ba cao thủ có mặt, chỉ
                    còn lại Dị Táp trẻ tuổi sóng sót. Hai mươi năm sau, Dị Táp
                    trở thành thủy quan, có cơ thể dị thường, để tìm ra sự thật
                    về lật ngược quá khứ và tự cứu mình, anh đã hợp tác với thủy
                    quan của những họ khác cùng nhau xuống nước mở hũ vàng lần
                    nữa
                  </span>
                </span>
                {/* <span className=" text-green-500 font-semibold">
                  Hiển thị thêm
                </span> */}
              </div>

              <div className="flex gap-x-2">
                <button className="  bg-green-600  hover:px-6 hover:py-3  ease-out duration-300 text-white px-4 py-2 rounded-sm">
                  Xem Ngay
                </button>
                <button className="  bg-gray-800  hover:px-6 hover:py-3  ease-out duration-300 text-white px-4 py-2 rounded-sm">
                  Thêm vào danh sách
                </button>
                <button className="bg-blue-500 hover:px-6 hover:py-3  ease-out duration-300 text-white px-4 py-2 rounded-sm">
                  Chia sẻ
                </button>
              </div>
            </div>
          </div>

          <div className="flex relative w-full z-10 ">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                width={1024}
                height={1025}
                src={Focus2}
                alt="Dynamic Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0   bg-gradient-to-l from-transparent to-black/100  via-transparent  "></div>
            </div>

            {/* <div>
              <Image
                className=" self-stretch z-0   bg-gradient-to-l from-black to-gray-400  -left-0 top-0 right-0   absolute opacity-80  from-[11.48%] h-full"
                src={Focus2}
                alt="Picture of the author"
                width={1024}
                height={1025}
              />
             
            </div> */}
          </div>
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
