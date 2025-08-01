"use client";

import { useState, useEffect } from "react";
import ImageProxy from "@/components/Image";

interface HeroSectionProps {
  featuredMovies: any[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredMovies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(4);

  const currentMovie = featuredMovies[currentMovieIndex];

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
    <section className="relative overflow-hidden  ">
      <div className="flex w-full h-full max-sm:flex-col-reverse text-sm justify-center items-center text-white">
        {/* Left Section - Movie Information */}
        <div className="w-full px-4 h-full relative text-white z-50 flex items-center max-sm:py-8">
          <div className="flex flex-col gap-4 max-sm:gap-3">
            <h1 className="font-extrabold text-4xl lg:text-6xl leading-tight max-sm:text-2xl">
              {currentMovie.name}
            </h1>

            <div className="flex items-center gap-x-2 text-sm max-sm:text-xs">
              <h3>9.5</h3>
              <div className="w-[2px] h-3 bg-gray-500"></div>
              <h3>T13</h3>
              <div className="w-[2px] h-3 bg-gray-500"></div>
              <h3>{currentMovie.year || "2025"}</h3>
              <div className="w-[2px] h-3 bg-gray-500"></div>
              <h3>{currentMovie.time || "1h 40m"}</h3>
            </div>

            <div className="flex flex-wrap gap-2 text-sm max-sm:text-xs">
              {currentMovie.category && currentMovie.category.length > 0
                ? [
                    ...(currentMovie.country || []),
                    ...currentMovie.category,
                  ].map((tag: any, i: number) => (
                    <span key={i} className="bg-gray-800 px-1 rounded-sm">
                      {tag.name}
                    </span>
                  ))
                : [
                    "Chiếu Rạp",
                    "Gay Cấn",
                    "Kinh Dị",
                    "Khoa Học",
                    "Tâm Lý",
                    "Viễn Tưởng",
                  ].map((genre, i) => (
                    <span key={i} className="bg-gray-800 px-1 rounded-sm">
                      {genre}
                    </span>
                  ))}
            </div>

            {currentMovie.director && currentMovie.director.length > 0 && (
              <span className="flex flex-wrap text-gray-400 gap-2 font-normal max-sm:text-xs">
                Đạo diễn:
                {currentMovie.director.map((name: string, i: number) => (
                  <span key={i} className="text-white rounded-sm">
                    {name}
                  </span>
                ))}
              </span>
            )}

            {currentMovie.actor && currentMovie.actor.length > 0 && (
              <span className="flex flex-wrap text-gray-400 gap-2 font-normal max-sm:text-xs">
                Diễn viên chính:
                {currentMovie.actor.map((actor: any, i: number) => (
                  <span key={i} className="text-white rounded-sm">
                    {actor.name} {i == currentMovie.actor.length - 1 ? "" : ","}
                  </span>
                ))}
              </span>
            )}

            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-gray-400 font-normal leading-6 line-clamp-6 max-sm:text-xs">
                Mô tả:{" "}
                <span className="text-white">
                  {currentMovie.content ? (
                    <>
                      {currentMovie.content.slice(0, 200)}...
                      <span className="text-blue-400 font-semibold">robot</span>
                      {currentMovie.content.slice(200, 400)}...
                    </>
                  ) : (
                    "MEGAN 2.0 lấy bối cảnh 2 năm sau các sự kiện ở phần 1. Lúc này, Gemma phát hiện công nghệ sản xuất MEGAN đã bị đánh cắp. Kẻ gian đã tạo ra một robot AI khác với chức năng tương tự MEGAN, nhưng được trang bị sức mạnh chiến đấu 'khủng' hơn mang tên Amelia..."
                  )}
                </span>
              </span>
            </div>

            <div className="flex gap-x-2  max-sm:gap-2">
              <button className="bg-green-600 hover:px-6 hover:py-3 ease-out duration-300 text-white px-4 py-2 rounded-sm max-sm:w-full">
                Xem Ngay
              </button>
              <button className="bg-gray-800 hover:px-6 hover:py-3 ease-out duration-300 text-white px-4 py-2 rounded-sm max-sm:w-full">
                Thêm vào danh sách
              </button>
              <button className="bg-blue-500 hover:px-6 hover:py-3 ease-out duration-300 text-white px-4 py-2 rounded-sm max-sm:w-full">
                Chia sẻ
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Movie Poster */}
        <div className="flex relative w-full z-10 max-sm:h-64">
          <div className="relative w-full h-full overflow-hidden">
            <ImageProxy
              priority={true}
              quality={100}
              width={1024}
              height={1025}
              src={currentMovie.poster_url || currentMovie.thumb_url}
              alt={currentMovie.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/100 via-transparent"></div>
          </div>
        </div>
      </div>

      {/* Thumbnails - bottom right */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-3 max-sm:bottom-4 max-sm:right-4 max-sm:gap-2">
        {featuredMovies.slice(0, 7).map((movie, idx) => (
          <button
            key={movie.id}
            className={`border-2 rounded-md overflow-hidden transition-all duration-300 ${
              idx === currentMovieIndex
                ? "border-green-500 scale-110"
                : "border-transparent opacity-70 hover:opacity-100"
            } max-sm:w-16 max-sm:h-10`}
            onClick={() => handleThumbnailClick(idx)}
          >
            <ImageProxy
              src={movie.thumb_url}
              alt={movie.name}
              width={80}
              height={50}
              className="object-cover w-20 h-12 max-sm:w-16 max-sm:h-10"
              quality={30}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
