import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OCASO — Rooftop Dining in Uttara",
  description:
    "An elevated dining experience above the city at Ocaso Skyscape, Uttara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
