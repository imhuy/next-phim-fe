"use client";

import React, { useState } from "react";
import EpisodesTab from "./EpisodesTab";
import ActorsTab from "./ActorsTab";
import RecommendationsTab from "./RecommendationsTab";

interface MovieTabsProps {
  movie: any;
}

const MovieTabs: React.FC<MovieTabsProps> = ({ movie }) => {
  const [activeTab, setActiveTab] = useState("episodes");

  const tabs = [
    { id: "episodes", label: "Chọn tập phim" },
    { id: "actors", label: "Diễn viên" },
    { id: "recommendations", label: "Đề xuất" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "episodes":
        return <EpisodesTab movieId={movie.id} />;
      case "actors":
        return <ActorsTab actors={movie.actor} />;
      case "recommendations":
        return <RecommendationsTab movieId={movie.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col ml-4 mx-auto">
      <div className="flex gap-x-4 border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-white pt-4 pb-2 px-4 transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-b-2 border-green-500 text-green-500"
                : "border-b border-transparent hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default MovieTabs;
