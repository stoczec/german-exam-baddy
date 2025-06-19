"use server"

import { z } from "zod"
import { isEmail } from "validator"
import { createClient } from "@/lib/supabase/server"

const schema = z.object({
  email: z.string().refine(isEmail, {
    message: "Bitte gib eine gültige E-Mail-Adresse ein.",
  }),
})

type State = {
  success: boolean
  error: string
}

export async function subscribeNewsletter(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = schema.safeParse({
    email: formData.get("email"),
  })

  if (!result.success) {
    return {
      success: false,
      error: result.error.format().email?._errors[0] ?? "Ungültige Eingabe",
    }
  }

  const email = result.data.email
  const supabase = await createClient()

  const { error } = await supabase.from("newsletter").insert({ email })

  if (error) {
    console.log("error", error);
    if (error.code === "23505") {
      return {
        success: false,
        error: "Du bist bereits angemeldet.",
      }
    }

    return {
      success: false,
      error: "Fehler beim Speichern.",
    }
  }
  

  return {
    success: true,
    error: "",
  }
}