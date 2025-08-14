import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { MdOutlineRocketLaunch } from "react-icons/md";

const About = () => {
  return (
    <div className="text-center p-8 mt-4 bg-gray-100 shadow-md">
      <h1 className="text-4xl text-gray-800 mb-4 font-bold">
        About Silicon Delta Academy
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-center w-[50%] text-gray-600 text-xl mb-16">
          We're committed to bridging the tech skills gap in Africa by providing
          world-class education and training programs that prepare students for
          successful careers in technology.
        </p>
      </div>
      {/* for my flex */}
      <div className="flex flex-wrap justify-center">
        {/* first */}
        <div className="h-64 rounded-2xl p-8 w-64 mt-7 hover:shadow-xl bg-gray-200 flex flex-col items-center justify-center mb-8 mx-auto">
          <span>
            <FaGraduationCap className="h-12 w-12 mt-4 mb-2 text-red-600" />
          </span>
          <h2 className="text-3xl text-gray-800 text-center mb-4 font-semibold">
            Our Mission
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            To empower individuals with the skills and knowledge needed to
            thrive in the digital economy.
          </p>
        </div>
        {/* 2nd */}
        <div className="h-64 rounded-2xl p-8 hover:shadow-xl w-64 mt-7 bg-gray-200 flex flex-col items-center justify-center mb-8 mx-auto">
          <span>
            <FiUsers className="h-12 w-12 mt-4 mb-2 text-red-600" />
          </span>
          <h2 className="text-3xl text-gray-800 text-center mb-4 font-semibold">
            Community Support
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Join a vibrant community of learners and mentors.
          </p>
        </div>
        {/* 3rd */}
        <div className="h-64 rounded-2xl p-8 hover:shadow-xl w-64 mt-7 bg-gray-200 flex flex-col items-center justify-center mb-8 mx-auto">
          <span>
            <GoTrophy className="h-12 w-12 mt-4 mb-2 text-red-600" />
          </span>
          <h2 className="text-3xl text-gray-800 text-center mb-4 font-semibold">
            Certification
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Earn industry-recognized certificates upon completion.
          </p>
        </div>
        {/* 4th */}

        <div className="h-64 p-8 rounded-2xl hover:shadow-xl w-64 mt-7 bg-gray-200 flex flex-col items-center justify-center mb-8 mx-auto">
          <span>
            <MdOutlineRocketLaunch className="h-12 w-12 mt-4 mb-2 text-red-600" />
          </span>
          <h2 className="text-3xl text-gray-800 text-center mb-4 font-semibold">
            Career Launch
          </h2>
          <p className="text-center text-lg text-gray-600 mb-2">
            Get job placement assistance and career guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
