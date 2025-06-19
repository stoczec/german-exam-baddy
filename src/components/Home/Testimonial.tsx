"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-10 md:py-16 xl:py-28">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <blockquote
          aria-label="Testimonial from Anna Müller"
          className="text-xl md:text-2xl leading-relaxed"
        >
          “Dank dieser Plattform habe ich mein B2-Niveau erreicht und fühle mich jetzt sicherer im
          Sprechen! Die interaktiven Übungen sind einfach großartig.”
        </blockquote>

        <div className="mt-10 flex flex-col items-center">
          <Image
            src="/testimonials/annamueller.png"
            alt="Anna Koval"
            width={64}
            height={64}
            className="rounded-full"
          />
          <p className="text-sm sm:text-base mt-4 font-semibold">Anna Koval</p>
          <p className="text-sm sm:text-base">Studentin, Universität</p>
        </div>
      </div>
    </section>
  );
}
