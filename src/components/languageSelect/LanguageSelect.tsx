"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function LanguageSelect() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const languageNames = {
    en: "English",
    de: "Deutsch",
    ua: "Українська",
    ru: "Русский",
  };

  const handleLocaleChange = (newLocale: string) => {
    const newPathname = pathname.replace(new RegExp(`^/${currentLocale}`), "");
    router.push(`/${newLocale}${newPathname || "/"}`);
  };

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {languageNames[locale as keyof typeof languageNames]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
