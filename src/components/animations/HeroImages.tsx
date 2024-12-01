"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/alger-post.svg",
  "/alger-post.svg",
  "/alger-post.svg",
  "/alger-post.svg",
];

export const HeroImages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-2/5 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent opacity-0 lg:opacity-100" />
      </div>
    </div>
  );
};
