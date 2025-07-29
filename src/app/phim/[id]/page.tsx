import ImageProxy from "@/components/Image";
import MovieTabs from "@/components/Movie/MovieTabs";
import { getMovieBySlug } from "@/lib/common/movies";

export default async function Home({ params }: { params: { id: string } }) {
  const data = await getMovieBySlug(params.id);
  const movie = data.data;

  return (
    <main className="bg-black pb-20">
      <div>
        <div>
          <p className="text-white border-b border-gray-800 pt-4 pb-2 mx-4 font-black font-sans text-2xl">
            Horror Series
          </p>
        </div>

        {/* content */}
        <div className="flex w-full max-sm:flex-col-reverse text-sm text-white">
          <div className="w-full px-4 mt-10 h-full relative text-white z-50 flex gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold text-2xl leading-10">
                {movie.name}
              </h1>
              <div className="flex items-center gap-x-2 text-sm">
                <h3>9.5</h3>
                <div className="w-[2px] h-3 bg-gray-500"></div>
                <h3>T13</h3>
                <div className="w-[2px] h-3 bg-gray-500"></div>
                <h3>{movie.year}</h3>
                <div className="w-[2px] h-3 bg-gray-500"></div>
                <h3>{movie.time}</h3>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                {[...movie.country, ...movie.category].map((tag, i) => (
                  <span key={i} className="bg-gray-800 px-1 rounded-sm">
                    {tag.name}
                  </span>
                ))}
              </div>

              <span className="flex flex-wrap text-gray-400 gap-2 font-normal">
                Đạo diễn:
                {movie.director.map((name, i) => (
                  <span key={i} className="text-white rounded-sm">
                    {name}
                  </span>
                ))}
              </span>
              <span className="flex flex-wrap text-gray-400 gap-2 font-normal">
                Diễn viên chính:
                {movie.actor.map((tag, i) => (
                  <span key={i} className="text-white rounded-sm">
                    {tag.name} {i == movie.actor.length - 1 ? "" : ","}
                  </span>
                ))}
              </span>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 font-normal leading-6 line-clamp-6">
                  Mô tả:{" "}
                  <span
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: movie.content }}
                  ></span>
                </span>
              </div>

              <div className="flex gap-x-2">
                <button className="bg-green-600 hover:px-6 hover:py-3 ease-out duration-300 text-white px-4 py-2 rounded-sm">
                  Xem Ngay
                </button>
                <button className="bg-gray-800 hover:px-6 hover:py-3 ease-out duration-300 text-white px-4 py-2 rounded-sm">
                  Thêm vào danh sách
                </button>
                <button className="bg-blue-500 hover:px-6 hover:py-3 ease-out duration-300 text-white px-4 py-2 rounded-sm">
                  Chia sẻ
                </button>
              </div>
            </div>
          </div>

          <div className="flex relative w-full z-10">
            <div className="relative w-full h-full overflow-hidden">
              <ImageProxy
                priority={true}
                quality={10}
                width={1024}
                height={1025}
                src={movie.poster_url}
                alt="Dynamic Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/100 via-transparent"></div>
            </div>
          </div>
        </div>

        <div className=" mr-2">
          <MovieTabs movie={movie} />
        </div>
      </div>
    </main>
  );
}
