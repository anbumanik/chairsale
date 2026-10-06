"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is the minimum order quantity (MOQ)?", a: "Our standard minimum order quantity is 25 boxes per plan to ensure we can provide the best bulk pricing and custom branding options." },
    { q: "What are your delivery timelines?", a: "We typically require 7-10 business days for standard orders, and 12-14 days for highly customized orders. Pan-India transit times vary by location." },
    { q: "Can we customize the items inside the box?", a: "While our plans are curated for maximum value, we offer flexibility for large orders (100+ boxes). Please speak to our team for custom configurations." },
    { q: "What are the payment terms?", a: "We require a 50% advance to confirm the order and begin customization. The remaining 50% is due prior to dispatch." },
    { q: "Do you provide a GST invoice?", a: "Yes, we provide valid GST invoices for all corporate orders, allowing you to claim input tax credit." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#CD9A34]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                {activeFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {activeFaq === i && (
                <div className="px-6 py-4 bg-gray-50 border-t border-border text-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
