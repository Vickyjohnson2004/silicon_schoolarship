"use client";

import React from "react";
import Link from "next/link";
import Scholarship from "../schoolarship/page";

const Future = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-red-600 to-red-600 text-white text-center">
      <h1 className="text-4xl font-bold text-white mb-6">
        Ready to Transform Your Future?
      </h1>
      <p className="mb-6 text-xl">
        Apply now for our scholarship program and join thousands of successful
        graduates
      </p>
      <Link
        href="/schoolarship"
        className="bg-white text-red-600 font-bold py-2 px-4 rounded inline-block"
      >
        Apply for Scholarship
      </Link>
    </div>
  );
};

export default Future;
