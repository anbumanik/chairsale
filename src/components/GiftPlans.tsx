"use client";

import React from "react";
import { Check, Crown, Heart, Gift, Candy, Flower2, Flame, Mail, ArrowRight, Leaf } from "lucide-react";
import { plans } from "@/data/plans";

interface GiftPlansProps {
  onSelectPlan: (planId: string) => void;
}

export default function GiftPlans({ onSelectPlan }: GiftPlansProps) {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0: return <Gift className="w-4 h-4 text-[#123524]" strokeWidth={1.5} />;
      case 1: return <Candy className="w-4 h-4 text-[#123524]" strokeWidth={1.5} />;
      case 2: return <Flower2 className="w-4 h-4 text-[#123524]" strokeWidth={1.5} />;
      case 3: return <Flame className="w-4 h-4 text-[#123524]" strokeWidth={1.5} />;
      case 4: return <Mail className="w-4 h-4 text-[#123524]" strokeWidth={1.5} />;
      default: return <Check className="w-4 h-4 text-[#123524]" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="plans" className="section-padding bg-[#123524]">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your <span className="bg-gradient-to-b from-[#FDF1BA] via-[#D4AF37] to-[#996515] bg-clip-text text-transparent drop-shadow-sm font-extrabold">Gift Plan</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Carefully curated hampers to suit your budget and express your gratitude.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flip-card h-[580px] w-full ${plan.isPopular ? "md:-mt-8 md:mb-8" : ""}`}
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
                </div>                {/* Back Side */}
                <div className="flip-card-back border-none rounded-2xl flex flex-col bg-[#F6F4ED] text-[#123524] shadow-xl overflow-hidden relative">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none overflow-hidden">
                    <Leaf className="w-24 h-24 absolute -top-4 -right-4 text-[#123524] rotate-45" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 pointer-events-none overflow-hidden">
                    <Leaf className="w-24 h-24 absolute -bottom-4 -left-4 text-[#123524] -rotate-135" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-full h-12 pointer-events-none opacity-80" 
                       style={{ background: 'linear-gradient(135deg, transparent 50%, #123524 50%)', borderRadius: '0 0 1rem 0' }}>
                    <div className="absolute bottom-1 right-2 text-[#C89A3C] opacity-80 text-xs tracking-widest">✧</div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full p-6">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-2">
                      {plan.isPopular ? (
                        <Crown className="w-5 h-5 text-[#C89A3C] mb-1 fill-[#C89A3C]" />
                      ) : (
                        <div className="h-6"></div> /* Spacer when no crown is present */
                      )}
                      <div className="bg-[#123524] text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-[#C89A3C]/50 shadow-sm">
                        {plan.name}
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center mb-3">
                      <div className="text-4xl font-extrabold text-[#123524] flex items-baseline justify-center tracking-tight">
                        ₹{plan.price}
                        <span className="text-lg font-medium ml-1">/box</span>
                      </div>
                      <p className="text-[#123524]/80 text-sm mt-0.5 font-medium">Minimum order: {plan.moq} boxes</p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center mb-3">
                      <div className="h-[1px] bg-[#C89A3C] w-12 opacity-50"></div>
                      <Heart className="w-3 h-3 text-[#C89A3C] mx-3 fill-[#C89A3C]" />
                      <div className="h-[1px] bg-[#C89A3C] w-12 opacity-50"></div>
                    </div>

                    {/* Features List */}
                    <ul className="flex-grow space-y-0 mb-3 overflow-hidden">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 border-b border-[#123524]/10 py-2.5 first:pt-0 last:border-0 last:pb-0">
                          <div className="w-8 h-8 rounded-full bg-[#E5E3D8] flex items-center justify-center flex-shrink-0 shadow-inner">
                            {getFeatureIcon(i)}
                          </div>
                          <span className="text-sm font-medium text-[#123524] leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className="w-full mt-auto py-3 rounded-full font-semibold transition-all bg-[#123524] text-white hover:bg-[#0a2015] flex items-center justify-center gap-2 border border-[#C89A3C]/40 shadow-lg group text-sm"
                    >
                      Choose Plan 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
