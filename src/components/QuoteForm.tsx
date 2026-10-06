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
    <section id="quote-form" className="section-padding bg-light border-t border-border">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Your Diwali Gift Quote</h2>
          <p className="text-center text-gray-600 mb-10">Fill out the details below and our team will get back to you within 24 hours.</p>

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
                  <label className="block text-sm font-bold mb-2">Name *</label>
                  <input
                    type="text"
                    className={`w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.name ? 'border-red-500' : 'border-gray-200'}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    className={`w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.email ? 'border-red-500' : 'border-gray-200'}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="work@company.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Company Name *</label>
                  <input
                    type="text"
                    className={`w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.company ? 'border-red-500' : 'border-gray-200'}`}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                  />
                  {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Expected Delivery Date *</label>
                  <input
                    type="date"
                    min={todayStr}
                    className={`w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.deliveryDate ? 'border-red-500' : 'border-gray-200'}`}
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                  />
                  {formErrors.deliveryDate && <p className="text-red-500 text-sm mt-1">{formErrors.deliveryDate}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Delivery Address (or City) *</label>
                <textarea
                  rows={3}
                  className={`w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.address ? 'border-red-500' : 'border-gray-200'}`}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter main office address or 'Multiple Cities'"
                ></textarea>
                {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div>
                  <label className="block text-sm font-bold mb-2">Selected Plan *</label>
                  <select
                    className={`w-full p-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.plan ? 'border-red-500' : 'border-gray-200'}`}
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
                  <label className="block text-sm font-bold mb-2">How Many Boxes? *</label>
                  <input
                    type="number"
                    min="1"
                    className={`w-full p-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-black ${formErrors.members ? 'border-red-500' : 'border-gray-200'}`}
                    value={formData.members}
                    onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                    placeholder="e.g. 50"
                  />
                  {formErrors.members && <p className="text-red-500 text-sm mt-1">{formErrors.members}</p>}
                </div>
              </div>

              <div className="py-4 border-t border-b border-border flex justify-between items-center">
                <span className="font-bold text-lg">Estimated Total:</span>
                <div className="text-right">
                  {estimatedTotal > 0 ? (
                    <>
                      <div className="text-2xl font-extrabold">₹{estimatedTotal.toLocaleString('en-IN')}</div>
                      <div className="text-xs text-gray-500 mt-1">Excl. GST & Customization</div>
                    </>
                  ) : (
                    <div className="text-gray-500 italic">Select plan & quantity</div>
                  )}
                </div>
              </div>

              <button type="submit" className="w-full btn-black text-lg py-4 rounded-xl">
                Request Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
