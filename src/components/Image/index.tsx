"use client";

import React, { useState, useEffect, useMemo } from "react";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  fallback?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

// Cache object để lưu trữ ảnh đã load - sử dụng WeakMap để tránh memory leak
const imageCache = new WeakMap<object, string>();

// Tạo blur placeholder tối ưu
const createBlurPlaceholder = (width: number = 100, height: number = 100) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect width="100%" height="100%" fill="url(#gradient)"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  `)}`;
};

const ImageProxy: React.FC<ImageProps> = ({
  src,
  alt,
  style,
  className = "",
  width,
  height,
  fallback = "/placeholder.jpg",
  priority = false,
  placeholder = "empty",
  blurDataURL,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 50,
  onLoad,
  onError,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Memoize blur placeholder để tránh tạo lại
  const memoizedBlurDataURL = useMemo(() => {
    if (blurDataURL) return blurDataURL;
    return createBlurPlaceholder(width || 100, height || 100);
  }, [blurDataURL, width, height]);

  // Tối ưu sizes dựa trên width
  const optimizedSizes = useMemo(() => {
    if (width && width < 400) {
      return "(max-width: 768px) 100vw, 400px";
    }
    if (width && width < 800) {
      return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px";
    }
    return sizes;
  }, [width, sizes]);

  useEffect(() => {
    // Kiểm tra cache trước
    const cacheKey = { src, width, height };
    if (imageCache.has(cacheKey)) {
      setIsLoading(false);
      setImageLoaded(true);
      return;
    }

    // Chỉ preload nếu priority = true hoặc ảnh nhỏ
    if (priority || (width && width < 200)) {
      const img = new Image();
      img.onload = () => {
        imageCache.set(cacheKey, src);
        setIsLoading(false);
        setImageLoaded(true);
      };
      img.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
      img.src = src;
    } else {
      // Không preload cho ảnh lớn không priority
      setIsLoading(false);
    }
  }, [src, priority, width, height]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Nếu có lỗi, sử dụng fallback với thẻ img thông thường
  if (hasError) {
    return (
      <div className={`relative ${className}`} style={style}>
        <img
          src={fallback}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Blur placeholder - chỉ hiển thị khi cần */}
      {placeholder === "blur" && !imageLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${memoizedBlurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
          }}
        />
      )}

      {/* Loading spinner - chỉ hiển thị cho ảnh priority */}
      {isLoading && priority && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        </div>
      )}

      {/* Next.js Image component */}
      <NextImage
        src={src}
        alt={alt}
        width={width || 80}
        height={height || 60}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={memoizedBlurDataURL}
        sizes={optimizedSizes}
        quality={quality}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{
          objectFit: "cover",
        }}
        // Thêm các thuộc tính tối ưu
        unoptimized={false}
        draggable={false}
      />
    </div>
  );
};

export default ImageProxy;
