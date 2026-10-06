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
              className={`border rounded-2xl p-8 bg-white flex flex-col h-full ${
                plan.isPopular ? "border-black shadow-xl md:-mt-8 md:mb-8" : "border-border shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="bg-black text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-6">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-2">₹{plan.price}<span className="text-lg text-gray-500 font-normal"> /box</span></div>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-border">Minimum order: {plan.moq} boxes</p>
              
              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 text-black" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.isPopular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black border border-black hover:bg-gray-50"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
