"use client";

import { useState, useEffect } from "react";
import ImageProxy from "@/components/Image";

interface HeroSectionProps {
  featuredMovies: any[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ featuredMovies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(4); // Bắt đầu từ thumbnail thứ 5

  const currentMovie = featuredMovies[currentMovieIndex];

  // Auto-rotate featured movies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 5000); // Thay đổi mỗi 5 giây

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentMovieIndex(index);
    setCurrentThumbnailIndex(index);
  };

  const formatDuration = (time: string) => {
    if (!time) return "1h 40m";
    return time;
  };

  const getYear = (movie: any) => {
    return movie.year || "2025";
  };

  const getRating = (movie: any) => {
    // Giả lập rating, có thể lấy từ API thực tế
    return "6.2";
  };

  const getGenres = (movie: any) => {
    if (movie.category && movie.category.length > 0) {
      return movie.category.slice(0, 6).map((cat: any) => cat.name);
    }
    return [
      "Chiếu Rạp",
      "Gay Cấn",
      "Kinh Dị",
      "Khoa Học",
      "Tâm Lý",
      "Viễn Tưởng",
    ];
  };

  if (!currentMovie) return null;

  return (
    <section className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full items-center">
            {/* Left Section - Movie Information */}
            <div className="lg:col-span-2 space-y-6 text-white">
              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-white">
                    {currentMovie.name?.slice(0, 4)}
                  </span>
                  <span className="text-pink-400 relative">
                    {currentMovie.name?.slice(4, 5)}
                    <span className="absolute -top-1 left-0 w-full h-0.5 bg-pink-400"></span>
                    <span className="absolute -top-2 left-0 w-full h-0.5 bg-pink-400"></span>
                    <span className="absolute -top-3 left-0 w-full h-0.5 bg-pink-400"></span>
                  </span>
                  <span className="text-white">
                    {currentMovie.name?.slice(5)}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300">
                  {currentMovie.origin_name}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded border border-black">
                  IMDb {getRating(currentMovie)}
                </span>
                <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded border border-black">
                  4K
                </span>
                <span className="px-3 py-1 bg-black text-white text-sm font-semibold rounded border border-white">
                  T18
                </span>
                <span className="px-3 py-1 bg-black text-white text-sm font-semibold rounded border border-white">
                  {getYear(currentMovie)}
                </span>
                <span className="px-3 py-1 bg-black text-white text-sm font-semibold rounded border border-white">
                  {formatDuration(currentMovie.time)}
                </span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {getGenres(currentMovie).map((genre: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-white text-sm rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="max-w-2xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentMovie.content ? (
                    <>
                      {currentMovie.content.slice(0, 200)}...
                      <span className="text-blue-400 font-semibold">robot</span>
                      {currentMovie.content.slice(200, 400)}...
                    </>
                  ) : (
                    "MEGAN 2.0 lấy bối cảnh 2 năm sau các sự kiện ở phần 1. Lúc này, Gemma phát hiện công nghệ sản xuất MEGAN đã bị đánh cắp. Kẻ gian đã tạo ra một robot AI khác với chức năng tương tự MEGAN, nhưng được trang bị sức mạnh chiến đấu 'khủng' hơn mang tên Amelia..."
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-4 transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-3 transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-3 transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section - Character Image */}
            <div className="lg:col-span-1 relative h-full flex items-center justify-center">
              <div className="relative w-full h-96 lg:h-[500px]">
                <ImageProxy
                  src={currentMovie.poster_url || currentMovie.thumb_url}
                  alt={currentMovie.name}
                  className="w-full h-full object-cover rounded-lg"
                  quality={80}
                />

                {/* Blue/Purple lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-lg"></div>

                {/* Lens flare effect */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl"></div>

                {/* Smoke effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails - bottom right */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-3">
        {featuredMovies.slice(0, 7).map((movie, idx) => (
          <button
            key={movie.id}
            className={`border-2 rounded-md overflow-hidden transition-all duration-300 ${
              idx === currentMovieIndex
                ? "border-pink-400 scale-110"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
            onClick={() => handleThumbnailClick(idx)}
          >
            <ImageProxy
              src={movie.thumb_url}
              alt={movie.name}
              width={80}
              height={50}
              className="object-cover w-20 h-12"
              quality={30}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
