// src/components/Trainers.jsx
import React from "react";

export default function Trainers() {
  const trainers = [
    { name: "Amir Shrestha", image: "/images/amirshrestha.svg" },
    { name: "Christina Thapa", image: "/images/christinathapa.svg" },
    { name: "Sunil Chetri", image: "/images/sunilchetra.svg" },
    { name: "Priya K.C", image: "/images/priyakc.svg" },
    { name: "Santosh Adhikari", image: "/images/santoshadhikari.svg" },
    { name: "Rina Pun", image: "/images/rinapun.svg" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading + "View All" Link */}
        <div className="relative mb-8">
          {/* Centered Heading */}
          <h2 className="text-3xl font-bold text-center">
            Meet our <span className="text-yellow-400">Trainers</span>
          </h2>
          {/* "View All" in upper-right */}
          <a href="#" className="absolute top-0 right-0 text-white underline">
            View All
          </a>
        </div>

        {/* Grid of 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trainers.map((trainer, index) => (
            <div key={index} className="card bg-black shadow-sm">
              <figure>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="object-cover w-full h-64"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{trainer.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
