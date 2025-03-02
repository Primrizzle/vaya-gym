// src/Services.jsx
import React from "react";

// Reusable card component (no title needed)
function ServiceCard({ iconPath }) {
  return (
    <div className="flex flex-col items-center p-4 bg-black rounded-lg">
      <div className="bg-black rounded-full p-3 mb-2">
        <img src={iconPath} alt="Service icon" className="w-24 h-24" />
      </div>
    </div>
  );
}

// Main Services Section
export default function Services() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Flex container for text (left) and icons (right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left: Heading & Description */}
          <div className="lg:w-1/2">
            <p className="text-sm font-bold text-yellow-300 uppercase">Services</p>
            <h2 className="mt-2 text-3xl font-bold">
              We provide service that <br />
              fits the best for you.
            </h2>
            <p className="mt-4 max-w-xl">
              Strive for greatness with the best, around the best, and in the best
              fitness environment available in the city.
            </p>
            <button className="mt-6 px-6 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition font-extrabold">
              See All
            </button>
          </div>

          {/* Right: 6 Icons in a 2x3 grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-1/2">
            <ServiceCard iconPath="/serviceIcons/wholebodyfatlossIcon.svg" />
            <ServiceCard iconPath="/serviceIcons/zumbaIcon.svg" />
            <ServiceCard iconPath="/serviceIcons/yogaIcon.svg" />
            <ServiceCard iconPath="/serviceIcons/bodybuildingIcon.svg" />
            <ServiceCard iconPath="/serviceIcons/aerobicsIcon.svg" />
            <ServiceCard iconPath="/serviceIcons/freeweightsIcon.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
