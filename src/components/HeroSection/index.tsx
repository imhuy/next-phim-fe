"use client";
import ImageProxy from "@/components/Image";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  featuredMovies: any[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredMovies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(4);

  const currentMovie = featuredMovies[currentMovieIndex];

  console.log("currentMoviecurrentMoviecurrentMovie", currentMovie);
  // Auto-rotate featured movies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentMovieIndex(index);
    setCurrentThumbnailIndex(index);
  };

  if (!currentMovie) return null;

  return (
    <main className="  bg-black pb-4">
      <div>
        {/* content */}
        <div className="flex w-full max-sm:flex-col-reverse text-sm text-white">
          <div className="w-full px-4 mt-10 h-full relative text-white z-50 flex gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold text-2xl leading-10">
                {currentMovie.name}
              </h1>
              <div className="flex items-center gap-x-2 text-sm">
                <h3>9.5</h3>
                <div className="w-[2px] h-3 bg-gray-500"></div>
                <h3>T13</h3>
                <div className="w-[2px] h-3 bg-gray-500"></div>
                <h3>{currentMovie.year}</h3>
                <div className="w-[2px] h-3 bg-gray-500"></div>
                <h3>{currentMovie.time}</h3>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                {[...currentMovie.country, ...currentMovie.category].map(
                  (tag, i) => (
                    <span key={i} className="bg-gray-800 px-1 rounded-sm">
                      {tag.name}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 font-normal leading-6 line-clamp-6">
                  Mô tả:{" "}
                  {/* <span
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: currentMovie.content }}
                  ></span> */}
                  <span>
                    Khi buổi thử vai cho một vở kịch sân khấu lớn bắt đầu, Ajin
                    bắt tay với một người mẫu đang gặp khó khăn để cạnh tranh,
                    nào hay biết về những bí mật đen tối ẩn sau bức màn.
                  </span>
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
                quality={100}
                src={currentMovie.poster_url}
                alt="Dynamic Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/100 via-transparent"></div>

              {/* Thumbnails - góc cuối bên phải của hình ảnh */}
              <div className="absolute bottom-4 right-4 z-30 flex gap-2 max-sm:bottom-4 max-sm:right-1/2 max-sm:translate-x-1/2 max-sm:gap-1">
                {featuredMovies.slice(0, 7).map((movie, idx) => (
                  <button
                    key={movie.id}
                    className={`border-2 rounded-md overflow-hidden transition-all duration-300 ${
                      idx === currentMovieIndex
                        ? "border-green-500 scale-110"
                        : "border-transparent opacity-70 hover:opacity-100"
                    } w-16 h-10 max-sm:w-12 max-sm:h-8`}
                    onClick={() => handleThumbnailClick(idx)}
                  >
                    <ImageProxy
                      src={movie.thumb_url}
                      alt={movie.name}
                      width={80}
                      height={50}
                      className="object-cover w-full h-full"
                      quality={30}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
