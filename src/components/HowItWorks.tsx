"use client";

import React, { useState, useEffect } from "react";
import { Truck } from "lucide-react";

export default function HowItWorks() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let startTime = Date.now();
    const driveDuration = 5000; // 5 seconds for driving
    const pauseDuration = 2000; // 2 seconds pause at the end

    const animate = () => {
      const now = Date.now();
      let elapsed = now - startTime;
      
      if (elapsed > driveDuration + pauseDuration) {
        startTime = now;
        elapsed = 0;
      }
      
      // Calculate progress and cap it at 100% during the pause
      const currentProgress = Math.min((elapsed / driveDuration) * 100, 100);
      setProgress(currentProgress);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const steps = [
    { step: 1, title: "Choose Plan", desc: "Select a package that fits your budget.", threshold: 0 },
    { step: 2, title: "Customize", desc: "Add your logo and personalized message.", threshold: 33 },
    { step: 3, title: "Confirm Order", desc: "Review details and finalize your bulk order.", threshold: 66 },
    { step: 4, title: "We Deliver", desc: "Seamless delivery to your employees.", threshold: 99 }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white overflow-hidden">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="flex flex-col md:flex-row relative w-full">
          
          {/* Animated Line Container */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gray-200 z-0 rounded-full">
            {/* Animated Green Line */}
            <div 
              className="absolute top-0 left-0 h-full bg-[#123524] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
            
            {/* Moving Truck Icon */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-[3px] border-[#123524] z-20"
              style={{ 
                left: `${progress}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Truck className="w-5 h-5 text-[#CD9A34]" />
            </div>
          </div>

          {steps.map((item) => {
            const isCompleted = progress >= item.threshold;
            
            return (
              <div key={item.step} className="flex-1 px-4 relative z-10 text-center flex flex-col items-center mb-8 md:mb-0">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 shadow-sm transition-colors duration-300
                    ${isCompleted 
                      ? "bg-[#CD9A34] text-white border-white shadow-[0_0_15px_rgba(205,154,52,0.4)]" 
                      : "bg-black text-white border-white"}`}
                >
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isCompleted ? 'text-[#123524]' : 'text-gray-400'}`}>
                  {item.title}
                </h3>
                <p className={`transition-colors duration-300 ${isCompleted ? 'text-gray-700' : 'text-gray-400'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
