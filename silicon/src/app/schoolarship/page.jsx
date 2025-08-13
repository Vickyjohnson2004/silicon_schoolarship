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
    console.log("Form submitted:", formData);
    // Handle submission logic here
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100 px-4  ">
      <div className="max-w-2xl w-full bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Apply for Scholarship
        </h1>
        <p className="text-center mb-7 text-gray-600">
          Join Silicon Delta Academy and transform your future
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone */}
          <div className="flex flex-row gap-4 space-y-4">
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

            {/* Email */}
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
          <div className="flex flex-row gap-4 space-y-4">
            <div className="flex-[50%]">
              <label
                htmlFor="stateOfOrigin"
                className="block text-sm font-medium text-gray-700"
              >
                State of Origin
              </label>
              <select
                name="stateOfOrigin"
                id="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                required
              >
                <option value="">Select State</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* State of Residence */}
            <div className="flex-[50%]">
              <label
                htmlFor="stateOfResidence"
                className="block text-sm font-medium text-gray-700"
              >
                State of Residence
              </label>
              <select
                name="stateOfResidence"
                id="stateOfResidence"
                value={formData.stateOfResidence}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2"
                required
              >
                <option value="">Select State</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Intended Course */}
          <label
            htmlFor="intendedCourse"
            className="block text-sm font-medium text-gray-700"
          >
            Intended Course
          </label>
          <select
            name="intendedCourse"
            id="intendedCourse"
            value={formData.intendedCourse}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-3 border rounded focus:outline-none focus:ring-2"
            required
          >
            <option value="">Select your preferred course</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Fullstack Development">Fullstack Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="DevOps">DevOps</option>
            <option value="Product Management">Product Management</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="AI / Machine Learning">AI / Machine Learning</option>
          </select>

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
