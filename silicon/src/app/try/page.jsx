"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const contentBlocks = [
  {
    image: "/images/bg1.jpg",
    header: "Join Hackathons",
    paragraph1: "Compete & Win.",
    paragraph2: "Participate in exciting coding competitions.",
  },
  {
    image: "/images/bg2.jpg",
    header: "Relax at the Beach",
    paragraph1: "Feel the warmth of the sun and the rhythm of the waves.",
    paragraph2: "Unwind with nature’s calm and coastal beauty.",
  },
  {
    image: "/images/bg3.jpg",
    header: "Wander the Forest",
    paragraph1: "Surround yourself with nature’s green peace.",
    paragraph2: "The perfect escape from the noise of everyday life.",
  },
  {
    image: "/images/bg4.jpg",
    header: "Discover the City",
    paragraph1: "Immerse yourself in culture, food, and vibrant streets.",
    paragraph2: "Every corner has a new story to tell.",
  },
  {
    image: "/images/bg5.jpg",
    header: "Experience the Desert",
    paragraph1: "Witness stunning sunsets and vast open spaces.",
    paragraph2: "A landscape like no other on Earth.",
  },
];

const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // Track slide direction
  const total = contentBlocks.length;

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentBlock = contentBlocks[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background sliding container */}
      <div
        key={currentIndex} // Key forces React to treat as new element, triggering animation
        className={`absolute inset-0 bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-6 z-10
          animate-slide-in-${direction}
          `}
        style={{ backgroundImage: `url(${currentBlock.image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {currentBlock.header}
        </h1>
        <p className="text-lg md:text-xl mb-2">{currentBlock.paragraph1}</p>
        <p className="text-lg md:text-xl">{currentBlock.paragraph2}</p>
      </div>

      {/* Left arrow */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 hover:text-gray-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Right arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20 hover:text-gray-300"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
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
