import React from "react";

export const Hero = () => {
  return (
    <div
      className="relative  h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/images/hero_background.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="relative text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
        Experience the authentic flavors of Egypt
      </h1>
    </div>
  );
};
