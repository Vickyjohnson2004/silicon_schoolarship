"use client";
import { useState } from "react";

const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const COURSES = [
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "UI/UX Design",
  "Data Science",
  "Data Analysis",
  "Cybersecurity",
  "Mobile App Development",
  "DevOps",
  "Product Management",
  "Cloud Computing",
  "AI / Machine Learning",
];

export default function SignupForm() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    stateOfOrigin: "",
    stateOfResidence: "",
    intendedCourse: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    // Handle submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl w-full bg-white text-black p-8 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Apply for Scholarship
        </h1>
        <p className="text-center mb-7 text-gray-600">
          Join Silicon Delta Academy and transform your future
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone & Email */}
          <div className="flex flex-row gap-4">
            <div className="flex-[50%]">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 800 000 0000"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                required
              />
            </div>

            <div className="flex-[50%]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                required
              />
            </div>
          </div>

          {/* State of Origin */}
          <div>
            <label
              htmlFor="stateOfOrigin"
              className="block text-sm font-medium text-gray-700"
            >
              State of Origin
            </label>
            <input
              list="states"
              name="stateOfOrigin"
              id="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
              placeholder="Enter or choose your state"
              required
            />
          </div>

          {/* State of Residence */}
          <div>
            <label
              htmlFor="stateOfResidence"
              className="block text-sm font-medium text-gray-700"
            >
              State of Residence
            </label>
            <input
              list="states"
              name="stateOfResidence"
              id="stateOfResidence"
              value={formData.stateOfResidence}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
              placeholder="Enter or choose your state"
              required
            />
          </div>

          {/* Intended Course */}
          <div>
            <label
              htmlFor="intendedCourse"
              className="block text-sm font-medium text-gray-700"
            >
              Intended Course
            </label>
            <input
              list="courses"
              name="intendedCourse"
              id="intendedCourse"
              value={formData.intendedCourse}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
              placeholder="Enter or choose a course"
              required
            />
          </div>

          {/* Datalists */}
          <datalist id="states">
            {NIGERIAN_STATES.map((state) => (
              <option key={state} value={state} />
            ))}
          </datalist>

          <datalist id="courses">
            {COURSES.map((course) => (
              <option key={course} value={course} />
            ))}
          </datalist>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
