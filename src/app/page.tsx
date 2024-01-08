import Image from "next/image";


async function getData() {
  const res = await fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}


async function Home() {
  const data = await getData();

  const latestMovie = data.items.slice(0, 6)
  const horrorSeries = data.items.slice(6, 12)
  const oldMovies = data.items.slice(12, 18)
  return (
    <main className="   bg-black  pb-20 ">
      <div className=" container mx-auto">
        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">Latest Movies</p>
          <div className=" grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-x-8   ">
            {latestMovie.map((item: any, i: number) =>
              <a href={`play/${item.slug}`} key={i} className="flex hover:scale-110 flex-col items-center gap-y-3 hover:font-semibold  py-4 transition duration-300 ease-in-out   ">
                <Image
                  className=" rounded-xl"
                  alt='img'
                  width={200}
                  height={300}
                  style={{
                    width: "200px",
                    height: "300px"
                  }}
                  src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`}
                >
                </Image>


                {/* <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div> */}

                <p className="truncate w-44 text-white ">{item.name}</p>

              </a>
            )}
          </div>
        </div>

        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">Horror Series</p>

          <div className=" grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-x-8   ">
            {horrorSeries.map((item: any, i: number) =>
              <a href={`play/${item.slug}`} key={i} className="flex hover:scale-110 flex-col items-center gap-y-3 hover:font-semibold  py-4 transition duration-300 ease-in-out   ">
                <Image
                  className=" rounded-xl"
                  alt='img'
                  width={200}
                  height={300}
                  style={{
                    width: "200px",
                    height: "300px"
                  }}
                  src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`}
                >
                </Image>


                {/* <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div> */}

                <p className="truncate w-44 text-white ">{item.name}</p>

              </a>
            )}
          </div>
        </div>


        <div className=" ">
          <p className=" text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">Old Movies</p>

          <div className=" grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-x-8   ">
            {oldMovies.map((item: any, i: number) =>
              <a href={`play/${item.slug}`} key={i} className="flex hover:scale-110 flex-col items-center gap-y-3 hover:font-semibold  py-4 transition duration-300 ease-in-out   ">
                <Image
                  className=" rounded-xl"
                  alt='img'
                  width={200}
                  height={300}
                  style={{
                    width: "200px",
                    height: "300px"
                  }}
                  src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`}
                >
                </Image>


                {/* <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div> */}

                <p className="truncate w-44 text-white ">{item.name}</p>

              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home;