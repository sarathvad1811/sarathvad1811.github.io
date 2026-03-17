import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarath Vadlamannati - The Tech Guy",
  description:
    "Welcome to my portfolio! I'm Sarath Vadlamannati, an Associate Director and Software Engineer with 9+ years of experience building scalable systems, intelligent applications, and developer-focused platforms. Explore my projects, skills, and experience in financial technology, enterprise platforms, and AI-powered solutions."
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
