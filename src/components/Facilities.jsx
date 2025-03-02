// src/components/Facilities.jsx
import React from "react";

export default function Facilities() {
  return (
    <section className="bg-black text-white py-12">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold">
          Our <span className="text-yellow-400">facilities</span>
        </h2>
      </div>

      {/* 2 Rows x 3 Columns Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex bg-black p-4 rounded shadow">
          <img
            src="/images/lockersandtowels.svg"
            alt="Lockers and towels"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Lockers and towels</h3>
            <p className="text-gray-300">
              Clean, safe and sanitary environment to keep your stuff.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex bg-black p-4 rounded shadow">
          <img
            src="/images/freewifi.svg"
            alt="Free Wifi"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Free Wifi</h3>
            <p className="text-gray-300">
              Stay connected to the world while you work yourself out.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex bg-black p-4 rounded shadow">
          <img
            src="/images/complimentarydrinks.svg"
            alt="Complimentary Drinks"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Complimentary Drinks</h3>
            <p className="text-gray-300">
              We make sure that you stay hydrated so that you can push yourself to the limit.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex bg-black p-4 rounded shadow">
          <img
            src="/images/hightechgym.svg"
            alt="Hightech Gym"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Hightech Gym</h3>
            <p className="text-gray-300">
              Build yourself with the best available equipment in the market.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex bg-black p-4 rounded shadow">
          <img
            src="/images/changingroom.svg"
            alt="Changing Room"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Changing Room</h3>
            <p className="text-gray-300">
              Sanitary changing room with proper privacy.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex bg-black p-4 rounded shadow">
          <img
            src="/images/personaltraining.svg"
            alt="Personal Trainer"
            className="w-32 h-32 object-cover rounded mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Trainer</h3>
            <p className="text-gray-300">
              You benefit from the monthly care of a Personal Trainer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
