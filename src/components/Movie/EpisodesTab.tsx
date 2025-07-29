"use client";

import React, { useState } from "react";

interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  thumbnail?: string;
}

interface EpisodesTabProps {
  movieId?: string;
}

const EpisodesTab: React.FC<EpisodesTabProps> = ({ movieId }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<number>(1);

  // Mock data cho episodes
  const episodes: Episode[] = [
    { id: "1", number: 1, title: "Tập 1: Khởi đầu", duration: "45:30" },
    { id: "2", number: 2, title: "Tập 2: Bí mật", duration: "42:15" },
    { id: "3", number: 3, title: "Tập 3: Khám phá", duration: "48:20" },
    { id: "4", number: 4, title: "Tập 4: Thử thách", duration: "44:10" },
    { id: "5", number: 5, title: "Tập 5: Đột phá", duration: "46:35" },
    { id: "6", number: 6, title: "Tập 6: Kết thúc", duration: "50:25" },
  ];

  return (
    <div className="w-full">
      {/* Header */}

      {/* Episodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            onClick={() => setSelectedEpisode(episode.number)}
            className={`relative group cursor-pointer transition-all duration-300 ${
              selectedEpisode === episode.number
                ? "ring-2 ring-green-500 ring-opacity-50"
                : "hover:ring-2 hover:ring-gray-500 hover:ring-opacity-30"
            }`}
          >
            {/* Episode Card */}
            <div className="bg-[#1A1C21] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Thumbnail */}
              <div className="relative h-32 bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-20">
                    {episode.number}
                  </div>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {episode.duration}
                </div>
                {/* Selected Indicator */}
                {selectedEpisode === episode.number && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Đang phát
                  </div>
                )}
              </div>

              {/* Episode Info */}
              <div className="p-4">
                <h4 className="text-white text-sm font-medium line-clamp-2">
                  {episode.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesTab;
