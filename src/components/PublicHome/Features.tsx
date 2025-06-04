"use client";

import FeaturesCard from "./FeaturesCard";

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center bg-background px-2 py-10 md:py-16 xl:py-28 xl:px-16">
      <h2 className="text-2xl text-center sm:text-3xl md:text-4xl  max-w-3xl font-normal mb-12 lg:mb-20">
        Entdecken Sie die leistungsstarken Funktionen unserer Sprachlernplattform
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 2xl:gap-12 ">
        <FeaturesCard
          imageUrl="/feature1.png"
          title="Optimieren Sie Ihr Lernen mit innovativen Tools und Technologien"
          description="Erhalten Sie sofortiges AI-Schreibfeedback, um Ihre Schreibfähigkeiten zu verbessern."
          buttonTitle="Mehr"
        />
        <FeaturesCard
          imageUrl="/feature2.png"
          title="Realistische Sprechsimulationen für effektives Sprachtraining"
          description="Üben Sie Ihre Sprechfähigkeiten mit interaktiven Simulationen, die Ihnen helfen, sicherer zu sprechen."
          buttonTitle="Start"
        />
        <FeaturesCard
          imageUrl="/feature3.png"
          title="Interaktive Übungen zur Vertiefung Ihres Sprachverständnisses"
          description="Nutzen Sie unsere Übungen, um Grammatik und Wortschatz spielerisch zu lernen."
          buttonTitle="Üben"
        />
      </div>
    </section>
  );
}
