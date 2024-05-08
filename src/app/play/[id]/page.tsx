import { headers } from "next/headers";

async function getData(slug: string) {
  const res = await fetch(`https://ophim1.com/phim/${slug}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // return data?.episodes[0].server_data;
  return data;
}

import VideoPlayer from "@/components/JwLoader/Jwplay";
import Image from "next/image";
async function Home() {
  const headersList = headers();

  const header_url = headersList.get("x-pathname") || "";
  const slugUrl = header_url.replace("/play/", "");

  let data = await getData(slugUrl);
  let episodes = data?.episodes[0].server_data;
  let movie = data?.movie;

  console.log("moviemoviemovie", movie.thumb_url);

  return (
    <div className="   mx-auto bg-[#424040]  ">
      <div className=" container mx-auto   shadow-2xl bg-[#171717]">
        <div className=" grid grid-cols-12">
          <div className=" col-span-9  ">
            <div className=" flex  flex-col ">
              <a className="flex items-center justify-center" href="/">
                <h1 className="  text-2xl font-semibold mt-4 hover:text-green-600">
                  {" "}
                  Trang chủ
                </h1>
              </a>

              {/* <Image
                className=" rounded-xl"
                alt="img"
                width={200}
                height={300}
                style={{
                  width: "200px",
                  height: "300px",
                }}
                src={`${movie.thumb_url}`}
              ></Image> */}
              <div className=" flex   flex-row  flex-wrap  gap-x-4 gap-y-4  ">
                {episodes.map((item: any, i: number) => (
                  <div
                    className=" flex  hover:bg-[#007E59] bg-[#666666] rounded-md"
                    key={i}
                  >
                    {/* <VideoPlayer video={item.link_m3u8} /> */}
                    <p className=" text-white px-2 py-1 font-semibold">
                      Tập {item.name}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          <div className=" col-span-3"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
