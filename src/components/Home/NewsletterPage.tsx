"use client";

import { subscribeNewsletter } from "@/server/actions/subscribe";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useActionState } from "react";

const initialState = { error: "", success: false };

export default function NewsletterForm() {
  const [state, formAction] = useActionState(subscribeNewsletter, initialState);
  return (
    <section
      className="py-10 px-3 md:px-10 xl:px-16 md:py-16 xl:py-28 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/newsletter_bg.png')" }}
    >
      <div className="container">
        <h2 className="text-3xl md:text-5xl mb-4">Bleiben Sie informiert</h2>
        <p className="mb-8 text-base md:text-lg">
          Melden Sie sich für unseren Newsletter an und erhalten Sie wertvolle Tipps zur
          Prüfungsvorbereitung.
        </p>
        {state.success ? (
          <div className="bg-white/10 rounded p-6 text-center text-white">
            <CheckCircle className="mx-auto mb-2 h-8 w-8 text-green-400" />
            <p className="text-lg font-medium">Danke für deine Anmeldung!</p>
            <p className="text-sm text-white/70">Wir halten dich auf dem Laufenden 📬</p>
          </div>
        ) : (
          <form action={formAction} className="max-w-xl flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                name="email"
                placeholder="Ihre E-Mail-Adresse"
                required
                className="flex-1 h-10 text-white bg-white/10 placeholder:text-white/60 border-0"
              />
              {state?.error && <p className="text-sm text-red-500 mt-1">{state.error}</p>}
            </div>
            <Button type="submit" size="lg">
              Anmelden
            </Button>
          </form>
        )}
        <p className="mt-6 text-xs md:text-sm text-white/70">
          Mit der Anmeldung stimmen Sie unseren Nutzungsbedingungen zu.
        </p>
      </div>
    </section>
  );
}
