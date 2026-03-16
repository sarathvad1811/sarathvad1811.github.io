import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luca — Frontend Developer Portfolio",
  description:
    "Frontend developer based in Italy. Building beautiful web experiences with React, Next.js, and modern web technologies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
