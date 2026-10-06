import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-light overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/plc1vxrq/video/upload/v1791272968/Corporate_Diwali_gift_video_concept_20261006121019.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative w-full pt-24 pb-64 md:pt-32 md:pb-96 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
          Make This Diwali <span className="text-[#B8860B] italic">Memorable</span><br />for Your Team
        </h1>
        <p className="text-sm md:text-base text-white font-normal mb-10 max-w-4xl drop-shadow-md">
          Premium corporate gifting with custom branding, bulk pricing and pan-India delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a href="#plans" className="px-8 py-3.5 rounded-full bg-[#CD9A34] text-black font-bold text-lg hover:bg-[#b8892f] transition-all shadow-[0_0_30px_rgba(205,154,52,0.4)] inline-block">
            Explore Gift Plans
          </a>
        </div>
      </div>
    </section>
  );
}
