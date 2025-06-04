"use server";

import { z } from "zod";
import { isEmail } from "validator"; // 👈 заміни lib/...

const schema = z.object({
  email: z.string().refine(isEmail, {
    message: "Bitte gib eine gültige E-Mail-Adresse ein.",
  }),
});

type State = {
  success: boolean;
  error: string;
};

export async function subscribeNewsletter(prevState: State, formData: FormData): Promise<State> {
  const result = schema.safeParse({
    email: formData.get("email"),
  });

  if (!result.success) {
    return {
      success: false,
      error: result.error.format().email?._errors[0] ?? "Ungültige Eingabe",
    };
  }

  const email = result.data.email;
  console.log("📨 Subscribed:", email);

  return {
    success: true,
    error: "",
  };
}
