import createIntlMiddleware from "next-intl/middleware"
import { updateSession } from "@/lib/supabase/middleware"
import { routing } from "./i18n/routing"
import { NextRequest } from "next/server"

const intlMiddleware = createIntlMiddleware(routing)

export async function middleware(request: NextRequest) {
  // 1. Supabase refreshing cookie 
  await updateSession(request)

  // 2. Intl returns ready response
  return intlMiddleware(request)
}
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};