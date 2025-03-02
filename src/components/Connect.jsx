import React from "react";
import ConnectImage from "/images/connectimage.svg";
// If you still need the Group component, import it:

export default function Connect() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          What’s <span className="text-yellow-400">Stopping</span> you?
        </h2>

        {/* Main Container (White Box) */}
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left: Image */}
          <img
            src={ConnectImage}
            alt="Rectangle"
            className="w-full md:w-1/2 h-auto object-cover"
          />

          {/* Right: Form Content */}
          <div className="p-6 items-centered md:p-10 md:w-1/2">
            {/* Title / Subtitle */}
            <p className="text-xl text-center font-bold mb-2">Become a part of our family</p>
            <p className="text-gray-600 text-center mb-6">
              Leave your details and we will get back to you!
            </p>

            {/* Full Name Field */}
            <div className="mb-4">
              
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 text-gray-400"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
                <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="mt-6">
              <button className="px-6 py-3 bg-yellow-400 text-black font-extrabold rounded-full hover:bg-yellow-500 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
