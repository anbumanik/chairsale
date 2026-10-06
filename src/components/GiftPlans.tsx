"use client";

import React from "react";
import { Check } from "lucide-react";
import { plans } from "@/data/plans";

interface GiftPlansProps {
  onSelectPlan: (planId: string) => void;
}

export default function GiftPlans({ onSelectPlan }: GiftPlansProps) {
  return (
    <section id="plans" className="section-padding bg-white">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Gift Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated hampers to suit your budget and express your gratitude.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flip-card h-[500px] w-full ${plan.isPopular ? "md:-mt-8 md:mb-8" : ""}`}
              tabIndex={0}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className={`flip-card-front border rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden ${plan.isPopular ? "border-[#CD9A34] shadow-[0_0_20px_rgba(205,154,52,0.3)]" : "border-border shadow-sm bg-white"}`}>
                  {plan.id === "Premium" ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 hover:scale-110" 
                      style={{ backgroundImage: 'url("https://res.cloudinary.com/plc1vxrq/image/upload/v1791275954/ChatGPT_Image_Oct_6_2026_01_55_45_PM.png")' }}
                    />
                  ) : (
                    <div className="relative z-10 p-8 flex flex-col items-center justify-center w-full h-full text-black">
                      <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                      <div className="text-5xl font-extrabold mb-4">₹{plan.price}<span className="text-xl font-normal opacity-80"> /box</span></div>
                      <p className="text-md opacity-80">Minimum order: {plan.moq} boxes</p>
                      <p className="mt-8 text-sm font-semibold uppercase tracking-wider animate-pulse flex items-center gap-2 text-black/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M21 13a9 9 0 1 1-3-7.7L21 8"></path></svg>
                        Hover for Details
                      </p>
                    </div>
                  )}
                </div>

                {/* Back Side */}
                <div className={`flip-card-back border rounded-2xl p-8 flex flex-col ${plan.isPopular ? "border-black shadow-xl bg-black text-white" : "border-border shadow-sm bg-white text-black"}`}>
                  <h3 className="text-2xl font-bold mb-4 border-b pb-2 border-opacity-20 border-gray-400">{plan.name} Features</h3>
                  <ul className="flex-grow space-y-4 mb-8 overflow-y-auto pr-2 custom-scrollbar">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-[#CD9A34]" : "text-black"}`} />
                        <span className={`text-sm ${plan.isPopular ? "text-gray-300" : "text-gray-700"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 rounded-full font-medium transition-colors ${
                      plan.isPopular
                        ? "bg-[#CD9A34] text-black hover:bg-[#b8892f]"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
