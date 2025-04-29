"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src="/hero_bg.jpeg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-left w-full px-6">
        <h1 className="max-w-xl text-left text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Bereite dich erfolgreich auf Deutschprüfungen vor
        </h1>
        <p className="max-w-xl mt-6 text-lg text-white/80">
          Unsere Plattform bietet dir maßgeschneiderte Unterstützung für die Goethe-Prüfungen B1, B2
          und C1. Mit KI-gestütztem Feedback, interaktiven Übungen und persönlichen
          Fortschrittsverfolgungen wirst du optimal vorbereitet.
        </p>
        <div className="mt-8 flex  gap-4">
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
