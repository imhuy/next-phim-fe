"use client";

import { useRef, useState, useEffect } from "react";
import ImageProxy from "@/components/Image";

interface MovieGridProps {
  movies: any[];
  title?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, title }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Intersection Observer để theo dõi items trong viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    const items = scrollContainerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [movies]);

  return (
    <div className="px-4">
      {title && <h2 className="text-white text-xl font-bold mb-4">{title}</h2>}

      <div className="relative group">
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-4"
        >
          {movies.map((item: any, i: number) => (
            <a
              href={`phim/${item.slug}`}
              key={i}
              data-index={i}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 hover:scale-105 flex flex-col items-center gap-y-1 sm:gap-y-2 md:gap-y-3 hover:font-semibold py-1 sm:py-2 md:py-4 transition duration-300 ease-in-out group/item"
            >
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-sm">
                {/* Skeleton loading khi chưa visible */}
                {!visibleItems.has(i) && (
                  <div className="w-full h-full   animate-pulse rounded-sm"></div>
                )}

                {/* Image chỉ load khi visible */}
                {visibleItems.has(i) && (
                  <ImageProxy
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                    alt={item.name}
                    src={item.thumb_url}
                    fallback="/placeholder.jpg"
                  />
                )}

                {/* Hover overlay - chỉ hiển thị trên desktop và khi đã load */}
                {visibleItems.has(i) && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-20 transition-all duration-300 hidden sm:flex items-center justify-center">
                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <div className="bg-green-500 rounded-full p-1 sm:p-2">
                        <svg
                          className="w-4 h-4 sm:w-6 sm:h-6 text-white"
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
                  </div>
                )}
              </div>

              <p className="truncate w-full text-center text-white text-xs sm:text-sm px-1 group-hover/item:text-green-400 transition-colors duration-300 leading-tight">
                {item.name}
              </p>
            </a>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-r-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-l-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieGrid;
