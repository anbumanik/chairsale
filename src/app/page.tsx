"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GiftPlans from "@/components/GiftPlans";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Customization from "@/components/Customization";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function CoreplaneLandingPage() {
  const [selectedPlanId, setSelectedPlanId] = useState("");

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
    const formSection = document.getElementById("quote-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-page text-primary flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GiftPlans onSelectPlan={handlePlanSelect} />
        <Features />
        <HowItWorks />
        <Customization />
        <Testimonials />
        <FAQ />
        <QuoteForm selectedPlanId={selectedPlanId} onPlanChange={setSelectedPlanId} />
      </main>
      <Footer />
    </div>
  );
}
