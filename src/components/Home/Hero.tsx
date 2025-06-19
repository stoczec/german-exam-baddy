"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <img
        src="/hero_bg.jpeg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-left w-full px-1 sm:px-6">
        <h1 className="mx-auto sm:ml-0 max-w-[340px] sm:max-w-[540px] md:max-w-[600px] text-center sm:text-left text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
          Bereite dich erfolgreich auf Deutschprüfungen vor
        </h1>
        <p className="text-center sm:text-left max-w-[460px] mx-auto sm:ml-0 sm:max-w-xl mt-6 text-sm sm:text-base md:text-lg text-white/80">
          Unsere Plattform bietet dir maßgeschneiderte Unterstützung für die Goethe-Prüfungen B1, B2
          und C1. Mit KI-gestütztem Feedback, interaktiven Übungen und persönlichen
          Fortschrittsverfolgungen wirst du optimal vorbereitet.
        </p>
        <div className="mt-8 flex justify-center sm:justify-start gap-4">
          <Button size="lg">Jetzt starten</Button>
          <Button
            variant="default"
            size="lg"
            className="text-white bg-white/20 transition-colors duration-300 hover:bg-white/30 focus:bg-white/20"
          >
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  );
}
