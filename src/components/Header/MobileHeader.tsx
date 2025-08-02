"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileHeaderProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  onSearch,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("de-xuat");

  const categories = [
    { name: "Đề xuất", slug: "de-xuat" },
    { name: "Phim Bộ", slug: "phim-bo" },
    { name: "Phim Hàn", slug: "phim-han" },
    { name: "Phim Lẻ", slug: "phim-le" },
    { name: "Hoạt hình", slug: "hoat-hinh" },
    { name: "Quốc gia", slug: "quoc-gia" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <div className="md:hidden">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        {/* Left - Menu and Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-md transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className="text-green-500 font-bold text-xl">Xephim</div>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Triều Tuyết Lục"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Right - App Download Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="font-medium">APP</span>
        </button>
      </div>

      {/* Bottom Section - Navigation Categories */}
      <div className="flex items-center px-4 py-3 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                activeCategory === category.slug
                  ? "text-white bg-gray-800"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => onCategoryChange?.(category.slug)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
