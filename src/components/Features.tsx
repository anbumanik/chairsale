import React from "react";
import { Building, Palette, Truck, Users } from "lucide-react";

export default function Features() {
  return (
    <section className="section-padding bg-light">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Coreplane</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Bulk Pricing</h3>
            <p className="text-gray-600">Competitive rates for large corporate orders ensuring best value for your budget.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Branding</h3>
            <p className="text-gray-600">Your company logo elegantly printed on boxes and personalized greeting cards.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pan-India Delivery</h3>
            <p className="text-gray-600">Reliable and on-time delivery across India, straight to offices or homes.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Dedicated Manager</h3>
            <p className="text-gray-600">A single point of contact to ensure a smooth, hassle-free gifting experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
