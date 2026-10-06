import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-light overflow-hidden">
      <div className="absolute inset-0">
        {/* Placeholder for festive background image */}
        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-rose-100 opacity-60"></div>
      </div>
      <div className="relative w-full py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Make This Diwali Memorable for Your Team
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
          Premium corporate gifting solutions with customizable branding, bulk pricing, and pan-India delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#plans" className="btn-black bg-white !text-black border-2 border-black hover:bg-gray-100">
            View Gift Plans
          </a>
          <a href="#quote-form" className="btn-black">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
