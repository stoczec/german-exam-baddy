"use client";
import Benefits from "@/components/PublicHome/Benefits";
import CallToAction from "@/components/PublicHome/CallToAction";
import Features from "@/components/PublicHome/Features";
import Footer from "@/components/PublicHome/Footer";
import Hero from "@/components/PublicHome/Hero";
import Navbar from "@/components/PublicHome/Navbar";
import NewsletterPage from "@/components/PublicHome/NewsletterPage";
import OnboardingSteps from "@/components/PublicHome/OnboardingSteps";
import Testimonial from "@/components/PublicHome/Testimonial";
import React, { useEffect } from "react";

export default function PreLoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black/75 text-foreground">
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <Benefits />
        <OnboardingSteps />
        <Testimonial />
        <CallToAction />
        <NewsletterPage />
      </main>
      <Footer />
    </div>
  );
}
