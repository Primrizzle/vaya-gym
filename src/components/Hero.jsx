// src/components/Hero.jsx
import React from "react";
import Stats from "./Stats";

// If you have your image in public/assets/vayaGymHero.png, use /assets/... path
// If you have it in src/assets, you can import it in JS: 
// import heroImage from '../assets/vayaGymHero.png';

export default function Hero() {
  return (
    <div className="hero bg-black min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/vayaGymHero.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero"
        />

        <div>
          <h1 className="text-5xl font-bold">Join The World Of Fitness</h1>
          <p className="py-6">
            Our aim is to bring more people into fitness so that every individual
            can live a healthy and happy life.
          </p>

          {/* Buttons Section */}
          <div className="flex items-center gap-6 justify-center lg:justify-start mt-4 font-extrabold">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
              Join Now
            </button>
            {/* Watch Video Link */}
            <a href="#" className="flex items-center gap-2 text-white hover:underline">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                <span className="text-white text-lg">▶</span>
              </div>
              Watch Video
            </a>
          </div>

          {/* Stats Section */}
          <Stats />
        </div>
      </div>
    </div>
  );
}
