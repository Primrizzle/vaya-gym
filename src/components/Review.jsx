// src/components/Review.jsx
import React from "react";

export default function Review() {
  return (
    <section className="bg-black text-white py-12">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold">
          Stories of our <span className="text-yellow-400">Vyayamshala</span> Family
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT COLUMN (Before/After Cards) */}
        <div className="flex items-end justify-center relative">
          {/* After Card (on top) */}
          <div className="flex flex-col items-center relative z-10 mr-[-20px]">
            <img
              src="/images/afterImage.svg"
              alt="After"
              className="w-64 h-64 mb-10 object-cover rounded shadow-lg"
            />
            <p className="mt-2 text-lg font-bold">After</p>
          </div>

          {/* Before Card (behind) */}
          <div className="flex flex-col items-center relative z-20">
            <img
              src="/images/beforeImage.svg"
              alt="Before"
              className="w-48 h-48 object-cover rounded shadow-lg"
            />
            <p className="mt-2 text-lg font-bold">Before</p>
          </div>
        </div>

        {/* RIGHT COLUMN (Testimonial + Stars + Quotes) */}
        <div className="relative flex flex-col items-center justify-center p-8">
          {/* Opening Quote - top-left */}
          <span className="text-7xl font-bold absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
            “
          </span>

          {/* Testimonial Text */}
          <p className="text-xl leading-7 mt-8">
            A complete package to all the fitness freaks out there. Join soon and test yourself.
            Vyayamshala’s layouts, environment, and surroundings play a vital role in motivating you
            to go beyond your limitations.
          </p>

          {/* Star Rating */}
          <div className="flex gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="/assets/star.svg" alt="star" className="w-5 h-5" />
            ))}
          </div>

          {/* Author */}
          <div className="text-sm text-gray-400 mt-4">John Doe, Student</div>

          {/* Closing Quote - bottom-right */}
          <span className="text-7xl font-bold absolute bottom-0 right-0 transform translate-x-2 translate-y-2">
            ”
          </span>
        </div>
      </div>
    </section>
  );
}
