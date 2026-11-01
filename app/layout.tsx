import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavana Lokesh | Software Developer Portfolio",
  description: "Portfolio of Bhavana Lokesh, MCA student and aspiring Software Developer.",
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