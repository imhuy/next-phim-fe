"use client";

import React from "react";
import ImageProxy from "@/components/Image";

interface RecommendationsTabProps {
  movieId?: string;
}

interface MovieRecommendation {
  id: string;
  title: string;
  poster: string;
  episodes: string;
  isDubbed?: boolean;
  isFeatured?: boolean;
}

const RecommendationsTab: React.FC<RecommendationsTabProps> = ({ movieId }) => {
  // Mock data cho phim đề xuất
  const recommendations: MovieRecommendation[] = [
    {
      id: "1",
      title: "Thư Quyên Nhất Mộng",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 40 tập",
      isDubbed: true,
      isFeatured: true,
    },
    {
      id: "2",
      title: "Minh Môi Thiện Thú",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Cập nhật tập 16",
      isDubbed: true,
    },
    {
      id: "3",
      title: "Ti Thừa Đại Nhân Thân Yêu",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 20 tập",
      isDubbed: true,
    },
    {
      id: "4",
      title: "Cung Tỏa Kim Chi",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 24 tập",
      isDubbed: true,
    },
    {
      id: "5",
      title: "Thiều Hoa Nhược Cẩm",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 30 tập",
      isDubbed: true,
    },
    {
      id: "6",
      title: "Nhất Đao Phong Nguyệt",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 24 tập",
      isDubbed: true,
    },
    {
      id: "7",
      title: "Ánh Mặt Trời Của Em",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 27 tập",
      isDubbed: true,
    },
    {
      id: "8",
      title: "Thư Quyên Nhất Mộng",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 40 tập",
      isDubbed: true,
    },
    {
      id: "9",
      title: "Thư Quyên Nhất Mộng",
      poster:
        "https://img.ophim.live/uploads/movies/nang-ham-hoc-hoi-thumb.jpg",
      episodes: "Trọn bộ 40 tập",
      isDubbed: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm">Dựa trên phim bạn đang xem</p>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {recommendations.map((movie, index) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-48 group cursor-pointer"
            >
              {/* Movie Poster Card */}
              <div className="relative bg-[#1A1C21] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Poster Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900">
                  <ImageProxy
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Movie Info Below Poster */}
                <div className="p-3">
                  <h4
                    className={`text-sm font-medium line-clamp-2 ${
                      movie.isFeatured ? "text-green-500" : "text-white"
                    }`}
                  >
                    {movie.isDubbed ? `[Thuyết Minh] ` : ""}
                    {movie.title}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{movie.episodes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-r p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-l p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RecommendationsTab;
