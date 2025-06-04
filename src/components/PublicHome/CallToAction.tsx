"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <section className="py-10 md:py-16 xl:py-28 bg-muted">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="mr-auto">
          <h2 className="text-2xl text-left max-w-60 sm:max-w-[350px] xl:max-w-[550px] mb-6 sm:text-3xl  xl:text-5xl leading-tight">
            Starte deine Sprachreise jetzt!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[470px] mb-6">
            Melde dich an und entdecke, wie einfach es ist, deine Deutschkenntnisse zu verbessern.
          </p>

          <div className="flex gap-2 sm:gap-4">
            <Button
              size="lg"
              className="text-xs sm:text-base px-4 sm:px-6 font-normal bg-gradient-to-r from-[#4F46E5] to-[#B73027] bg-[length:200%_200%] bg-right-bottom transition-all duration-500 hover:bg-left-top"
            >
              Kostenlose Testversion
            </Button>
            <Button
              variant="default"
              size="lg"
              className="text-foreground text-xs sm:text-base px-4 sm:px-6 font-normal bg-black/10 transition-colors duration-300 hover:bg-black/20 focus:bg-white/20"
            >
              Jetzt anmelden
            </Button>
          </div>
        </div>

        <div className="mx-auto">
          <Image
            src="/cta_image.png"
            alt="Woman at desk"
            width={600}
            height={400}
            className="rounded-4xl md:rounded-2xl object-cover  h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
