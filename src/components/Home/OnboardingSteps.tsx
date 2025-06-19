"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import OnboardingStepsCard from "./OnboardingStepsCard";
import { ChevronRight } from "lucide-react";

export default function OnboardingSteps() {
  return (
    <section className="bg-accent py-10 md:py-16 xl:py-28">
      <div className="container mx-auto px-2 text-center">
        <p className="font-semibold text-sm sm:text-base text-center mb-3 md:mb-4">Vorbereitung</p>
        <h2 className="mx-auto font-normal text-center text-2xl sm:text-3xl md:text-4xl max-w-[300px] sm:max-w-[400px] md:max-w-[600px] mb-5 md:mb-6">
          So nutzen Sie unsere Plattform effektiv
        </h2>
        <p className="text-sm sm:text-base max-w-2xl mx-auto text-muted-foreground mb-12 md:mb-20">
          Unsere Plattform bietet Ihnen eine strukturierte Vorbereitung auf die
          Goethe-Sprachprüfungen. Mit interaktiven Übungen und personalisiertem Feedback verbessern
          Sie gezielt Ihre Fähigkeiten.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 2xl:gap-12 mb-16">
          <OnboardingStepsCard
            imageUrl="/icons/profile.png"
            alt="Profil image"
            title="Schritt 1: Registrierung und Profil erstellen"
            description="Melden Sie sich an und erstellen Sie Ihr persönliches Lernprofil."
          />
          <OnboardingStepsCard
            imageUrl="/icons/materials.png"
            alt="Lernmaterialien image"
            title="Schritt 2: Lernmaterialien auswählen"
            description="Wählen Sie die passenden Materialien für Ihre Prüfungsvorbereitung aus."
          />
          <OnboardingStepsCard
            imageUrl="/icons/feedback.png"
            alt="Übungen und Feedback image"
            title="Schritt 3: Übungen und Feedback nutzen"
            description="Nutzen Sie unsere interaktiven Übungen und erhalten Sie sofortiges Feedback."
          />
        </div>

        <div className="flex justify-center gap-2.5">
          <Button className="px-5 text-foreground/90 bg-black/5 transition-colors duration-300 hover:bg-black/10">
            start
          </Button>
          <Button variant="ghost" className="group text-foreground px-5">
            mehr
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
