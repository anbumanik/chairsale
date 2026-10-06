import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-border z-0"></div>
          {[
            { step: 1, title: "Choose Plan", desc: "Select a package that fits your budget." },
            { step: 2, title: "Customize", desc: "Add your logo and personalized message." },
            { step: 3, title: "Confirm Order", desc: "Review details and finalize your bulk order." },
            { step: 4, title: "We Deliver", desc: "Seamless delivery to your employees." }
          ].map((item) => (
            <div key={item.step} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-sm">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
