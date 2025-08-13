"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// import image1 from "../../assets/forONE.jpg";

const contentBlocks = [
  {
    image: "/image1.jpeg",
    header: "Join Hackathons",
    paragraph1: "Compete & Win.",
    paragraph2: "Participate in exciting coding competitions.",
  },
  {
    image: "/image2.jpeg",
    header: "Learn From Industry Experts",
    paragraph1: "World-Class Education.",
    paragraph2: "Get mentored by professionals from top tech companies.",
  },
  {
    image: "/image6.jpeg",

    header: "Learn From Industry Experts",
    paragraph1: "Surround yourself with nature’s green peace.",
    paragraph2: "The perfect escape from the noise of everyday life.",
  },
  {
    image: "/image9.jpeg",
    header: "Build Real Projects",
    paragraph1: "Immerse yourself in culture, food, and vibrant streets.",
    paragraph2: "Every corner has a new story to tell.",
  },
  {
    image: "/image11.jpeg",
    header: "Transform Your Future",
    paragraph1: "Witness stunning sunsets and vast open spaces.",
    paragraph2: "A landscape like no other on Earth.",
  },
];

const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const total = contentBlocks.length;

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBlock = contentBlocks[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        key={currentIndex}
        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out z-0 ${
          direction === "right"
            ? "animate-slide-in-right"
            : "animate-slide-in-left"
        }`}
      >
        <Image
          src={currentBlock.image}
          alt={currentBlock.header}
          fill
          className="object-cover w-[300px"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {currentBlock.header}
        </h1>
        <p className="text-lg md:text-xl mb-2">{currentBlock.paragraph1}</p>
        <p className="text-lg md:text-xl">{currentBlock.paragraph2}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-30 hover:text-gray-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-30 hover:text-gray-300"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default BackgroundCarousel;
