"use client";

import Image from "next/image";
import { ChevronRight, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function Benefits() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between container mx-auto bg-white  py-10 md:py-16 xl:py-28 gap-2.5">
      <div className="flex flex-col justify-center text-center mb-7 lg:mb-0 px-2 mx-auto">
        <p className="font-semibold text-sm sm:text-base text-left mb-4">Vorteile</p>
        <h2 className="text-2xl text-left max-w-96 mb-6 sm:text-3xl md:text-4xl">
          Entdecken Sie die Vorteile unserer Plattform
        </h2>
        <p className="text-left text-base sm:text-lg text-muted-foreground max-w-xl  mb-10">
          Unsere Plattform bietet Ihnen eine effiziente Vorbereitung auf Deutschprüfungen. Nutzen
          Sie personalisierte Rückmeldungen und interaktive Übungen für Ihren Erfolg.
        </p>

        <div className="grid xl:grid-cols-2 gap-6 max-w-4xl mb-10">
          <Card className="p-2 2xl:p-6 text-left max-w-[403]">
            <CardContent className="flex items-start gap-4 p-0">
              <Clock className="text-primary size-6 mt-1" />
              <div>
                <h3 className="ext-base 2xl:text-lg">Zeitersparnis</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Schneller lernen und sich auf Prüfungen konzentrieren.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-2 2xl:p-6 text-left max-w-[403]">
            <CardContent className="flex items-start gap-4 p-0">
              <MessageCircle className="text-primary size-8 mt-1" />
              <div>
                <h3 className="text-base 2xl:text-lg">Personalisierte Rückmeldungen</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Erhalten Sie individuelles Feedback für Ihre Schreib- und Sprechfähigkeiten.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-2.5">
          <Button className="px-5 text-foreground/90 bg-black/5 transition-colors duration-300 hover:bg-black/10">
            Jetzt
          </Button>
          <Button variant="ghost" className="group text-foreground px-5">
            mehr
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
      <div className="mx-auto px-6">
        <Image
          src="/benefits.png"
          alt={"Programmer is working"}
          width={616}
          height={640}
          className="rounded-4xl"
        />
      </div>
    </section>
  );
}
