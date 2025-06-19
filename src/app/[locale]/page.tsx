import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PreLogin from "@/components/preLogin/PreLogin";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/account");
  }

  return <PreLogin />;
}
