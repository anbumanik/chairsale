import React from "react";
import { Check, Palette } from "lucide-react";

export default function Customization() {
  return (
    <section id="customization" className="section-padding bg-black text-white">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make It Truly Yours</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We understand that corporate gifting is an extension of your brand identity. That's why we offer comprehensive customization options to ensure every hamper resonates with your company's values and warmth.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Logo-printed premium gift boxes</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Personalized greeting cards with HR message</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Individual employee home delivery available</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl aspect-square flex items-center justify-center border border-white/10 p-8">
            {/* Placeholder for customization image */}
            <div className="text-center opacity-50">
              <Palette className="w-24 h-24 mx-auto mb-4" />
              <p className="text-xl">Premium Branding Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
