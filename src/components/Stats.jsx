// src/components/Stats.jsx
import React from "react";

export default function Stats() {
  return (
    <div className="flex justify-center lg:justify-start gap-12 mt-8 text-center lg:text-left">
      <div className="text-center">
        <p className="text-3xl font-bold text-yellow-400">7</p>
        <p className="text-gray-300">Years Experience</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-yellow-400">25k+</p>
        <p className="text-gray-300">Happy Customers</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-yellow-400">95</p>
        <p className="text-gray-300">Gym Trainers</p>
      </div>
    </div>
  );
}
