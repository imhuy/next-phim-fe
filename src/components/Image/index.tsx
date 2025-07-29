"use client";

import React, { useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Cache object để lưu trữ ảnh đã load
const imageCache = new Map<string, string>();

const ImageProxy: React.FC<ImageProps> = ({
  src,
  alt,
  style,
  className = "",
  width,
  height,
  fallback = "/placeholder.jpg",
  onLoad,
  onError,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Kiểm tra cache trước
    if (imageCache.has(src)) {
      setIsLoading(false);
      return;
    }

    // Preload ảnh và cache
    const img = new Image();
    img.onload = () => {
      imageCache.set(src, src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };
    img.src = src;
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={hasError ? fallback : src}
        alt={alt}
        width={width}
        style={style}
        height={height}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default ImageProxy;
