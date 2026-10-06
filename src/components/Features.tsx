import React from "react";
import { Building, Palette, Truck, Users } from "lucide-react";

export default function Features() {
  return (
    <section id="who-we-are" className="section-padding bg-light">
      <div className="w-full">
        <div className="text-center mb-16 flex justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide relative group cursor-default inline-block">
            {/* Outline state (Default) */}
            <span className="text-transparent [-webkit-text-stroke:2px_#996515] drop-shadow-sm transition-opacity duration-500 group-hover:opacity-0 block">
              WELCOME TO COREPLANE
            </span>
            {/* Filled state (Hover) */}
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#FDF1BA] via-[#D4AF37] to-[#996515] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_3px_3px_rgba(40,20,0,0.8)]">
              WELCOME TO COREPLANE
            </span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#123524] p-8 rounded-2xl shadow-sm text-center group hover:shadow-md transition-shadow border border-[#123524] hover:border-[#CD9A34]/30">
            <div className="w-16 h-16 bg-[#CD9A34] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Building className="w-8 h-8 text-[#123524]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Bulk Pricing</h3>
            <p className="text-white/80">Competitive rates for large corporate orders ensuring best value for your budget.</p>
          </div>
          <div className="bg-[#123524] p-8 rounded-2xl shadow-sm text-center group hover:shadow-md transition-shadow border border-[#123524] hover:border-[#CD9A34]/30">
            <div className="w-16 h-16 bg-[#CD9A34] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Palette className="w-8 h-8 text-[#123524]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Custom Branding</h3>
            <p className="text-white/80">Your company logo elegantly printed on boxes and personalized greeting cards.</p>
          </div>
          <div className="bg-[#123524] p-8 rounded-2xl shadow-sm text-center group hover:shadow-md transition-shadow border border-[#123524] hover:border-[#CD9A34]/30">
            <div className="w-16 h-16 bg-[#CD9A34] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Truck className="w-8 h-8 text-[#123524]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Pan-India Delivery</h3>
            <p className="text-white/80">Reliable and on-time delivery across India, straight to offices or homes.</p>
          </div>
          <div className="bg-[#123524] p-8 rounded-2xl shadow-sm text-center group hover:shadow-md transition-shadow border border-[#123524] hover:border-[#CD9A34]/30">
            <div className="w-16 h-16 bg-[#CD9A34] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Users className="w-8 h-8 text-[#123524]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Dedicated Manager</h3>
            <p className="text-white/80">A single point of contact to ensure a smooth, hassle-free gifting experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
