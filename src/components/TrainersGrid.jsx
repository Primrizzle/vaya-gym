// src/components/TrainersGrid.jsx
import React from "react";

export default function TrainersGrid({ trainers }) {
  return (
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
  );
}
