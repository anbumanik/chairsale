import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding bg-light">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Coreplane made our Diwali gifting completely stress-free. The hampers were stunning and delivered right on time to all our branch offices.",
              name: "Priya S.",
              title: "HR Director, TechFlow"
            },
            {
              quote: "The customization quality is top-notch. Our employees loved the personalized touch. Highly recommend their Luxury Plan!",
              name: "Rahul M.",
              title: "Procurement Manager, FinEdge"
            },
            {
              quote: "Seamless experience from quoting to delivery. The dedicated account manager was always available and helpful.",
              name: "Anita D.",
              title: "Admin Head, BuildCorp"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-8 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
