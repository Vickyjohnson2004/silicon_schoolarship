import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-white text-center py-12">
      <h1 className="text-2xl py-2 font-bold">Silicon Delta Academy</h1>
      <p className="mt-2 mb-4 text-gray-400">
        Empowering the next generation of African tech leaders
      </p>
      <p className="mt-4 text-gray-500">
        © {currentYear} Silicon Delta Academy. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
