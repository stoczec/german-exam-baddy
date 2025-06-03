"use client";
import Benefits from "@/components/PublicHome/Benefits";
import Features from "@/components/PublicHome/Features";
import Hero from "@/components/PublicHome/Hero";
import Navbar from "@/components/PublicHome/Navbar";
import OnboardingSteps from "@/components/PublicHome/OnboardingSteps";
import React from "react";

export default function PreLoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <Benefits />
        <OnboardingSteps />
      </main>
      <section className="h-200 w-full bg-accent-foreground">...</section>
      {/* <Footer /> */}
    </div>
  );
}
