"use client";

import { useState } from "react";
import Link from "next/link";

interface DesktopHeaderProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
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
    <div className="hidden md:flex items-center bg-gradient-to-b from-transparent to-black/100 via-transparent justify-between px-6 py-4">
      {/* Left - Logo and Navigation */}
      <div className="flex items-center gap-8">
        <div className="text-green-500 font-bold text-2xl">Xephim</div>
        <nav className="flex items-center gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className={`transition-colors ${
                activeCategory === category.slug
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => onCategoryChange?.(category.slug)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Center - Search Bar */}
      {/* Right - User Actions and Promotions */}
      <div className="flex items-center gap-6">
        <div className="flex-1 max-w-md mx-8 flex justify-end">
          <div className="w-80">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Triều Tuyết Lục"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-sm px-4 py-2 pr-10 focus:outline-none"
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
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6"></path>
              <path d="M3.6 9h16.8"></path>
              <path d="M3.6 15h16.8"></path>
            </svg>
            <span className="text-xs">Lịch sử xem</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
            <span className="text-xs">Ngôn ngữ</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-xs">Của tôi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
