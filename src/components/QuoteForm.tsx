"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { plans } from "@/data/plans";

interface QuoteFormProps {
  selectedPlanId?: string;
  onPlanChange?: (planId: string) => void;
}

export default function QuoteForm({ selectedPlanId = "", onPlanChange }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    deliveryDate: "",
    members: "",
    plan: selectedPlanId,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, plan: selectedPlanId }));
  }, [selectedPlanId]);

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, plan: val });
    if (onPlanChange) onPlanChange(val);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.company.trim()) errors.company = "Company Name is required.";
    if (!formData.address.trim()) errors.address = "Delivery Address is required.";
    if (!formData.deliveryDate) {
      errors.deliveryDate = "Delivery Date is required.";
    }
    if (!formData.members) {
      errors.members = "Number of members is required.";
    } else if (parseInt(formData.members) < 1) {
      errors.members = "Must be at least 1.";
    }
    if (!formData.plan) {
      errors.plan = "Please select a plan.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        address: "",
        deliveryDate: "",
        members: "",
        plan: "",
      });
      if (onPlanChange) onPlanChange("");
      setFormErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const todayStr = new Date().toISOString().split("T")[0];

  let estimatedTotal = 0;
  if (formData.plan && formData.members && parseInt(formData.members) > 0) {
    const selectedPlanData = plans.find((p) => p.id === formData.plan);
    if (selectedPlanData) {
      estimatedTotal = selectedPlanData.price * parseInt(formData.members);
    }
  }

  return (
    <section id="quote-form" className="section-padding bg-[#123524] text-white border-t border-white/10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-[#123524] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-[#CD9A34]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CD9A34] to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Get Your <span className="text-[#CD9A34]">Diwali Gift Quote</span></h2>
          <p className="text-center text-white/80 mb-10">Fill out the details below and our team will get back to you within 24 hours.</p>

          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thanks!</h3>
              <p className="text-lg">Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">Name *</label>
                  <input
                    type="text"
                    className={`w-full p-3 border rounded-xl bg-white/5 text-white placeholder-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.name ? 'border-red-500' : 'border-white/20'}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">Email *</label>
                  <input
                    type="email"
                    className={`w-full p-3 border rounded-xl bg-white/5 text-white placeholder-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.email ? 'border-red-500' : 'border-white/20'}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="work@company.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">Company Name *</label>
                  <input
                    type="text"
                    className={`w-full p-3 border rounded-xl bg-white/5 text-white placeholder-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.company ? 'border-red-500' : 'border-white/20'}`}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                  />
                  {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">Expected Delivery Date *</label>
                  <input
                    type="date"
                    min={todayStr}
                    className={`w-full p-3 border rounded-xl bg-white/5 text-white placeholder-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.deliveryDate ? 'border-red-500' : 'border-white/20'} [color-scheme:dark]`}
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                  />
                  {formErrors.deliveryDate && <p className="text-red-500 text-sm mt-1">{formErrors.deliveryDate}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-white/90">Delivery Address (or City) *</label>
                <textarea
                  rows={3}
                  className={`w-full p-3 border rounded-xl bg-white/5 text-white placeholder-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.address ? 'border-red-500' : 'border-white/20'}`}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter main office address or 'Multiple Cities'"
                ></textarea>
                {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6 p-6 bg-[#0a1c13] rounded-2xl border border-white/10 shadow-inner">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">Selected Plan *</label>
                  <select
                    className={`w-full p-3 border rounded-xl bg-[#123524] text-white focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.plan ? 'border-red-500' : 'border-white/20'}`}
                    value={formData.plan}
                    onChange={handlePlanChange}
                  >
                    <option value="">-- Choose a Plan --</option>
                    {plans.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} (₹{p.price}/box)
                      </option>
                    ))}
                  </select>
                  {formErrors.plan && <p className="text-red-500 text-sm mt-1">{formErrors.plan}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-white/90">How Many Boxes? *</label>
                  <input
                    type="number"
                    min="1"
                    className={`w-full p-3 border rounded-xl bg-[#123524] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#CD9A34] ${formErrors.members ? 'border-red-500' : 'border-white/20'}`}
                    value={formData.members}
                    onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                    placeholder="e.g. 50"
                  />
                  {formErrors.members && <p className="text-red-500 text-sm mt-1">{formErrors.members}</p>}
                </div>
              </div>

              <div className="py-4 border-t border-b border-white/10 flex justify-between items-center">
                <span className="font-bold text-lg text-white/90">Estimated Total:</span>
                <div className="text-right">
                  {estimatedTotal > 0 ? (
                    <>
                      <div className="text-2xl font-extrabold text-[#CD9A34]">₹{estimatedTotal.toLocaleString('en-IN')}</div>
                      <div className="text-xs text-white/50 mt-1">Excl. GST & Customization</div>
                    </>
                  ) : (
                    <div className="text-white/40 italic">Select plan & quantity</div>
                  )}
                </div>
              </div>

              <button type="submit" className="w-full bg-[#CD9A34] hover:bg-[#b8892f] text-[#123524] font-extrabold text-lg py-4 rounded-xl shadow-[0_0_15px_rgba(205,154,52,0.4)] transition-all transform hover:scale-[1.02]">
                Request Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
