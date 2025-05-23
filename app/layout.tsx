import { AppConfig } from "@/config/app.config";
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Suspense fallback={<div>Loading...</div>}>
        <body>{children}</body>
      </Suspense>
    </html>
  );
}
