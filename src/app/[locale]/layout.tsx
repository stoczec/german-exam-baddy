import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { BreadcrumbResponsive, ThemeProvider } from "@/components";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Metadata } from "next";
import { globalMetadata } from "../metadata";

export const metadata: Metadata = {
  ...globalMetadata,
};

export default async function RootLayout({
  children,
  modal,
  params,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {modal}
            {/* Uncomment the line below to enable responsive breadcrumbs */}
            {/* <BreadcrumbResponsive /> */}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
