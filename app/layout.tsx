import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavana Lokesh | Software Developer",
  description:
    "Bhavana Lokesh is an MCA student and aspiring software developer interested in web development, cloud computing and AI.",
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