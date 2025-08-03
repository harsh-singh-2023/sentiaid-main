import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SentiAid - AI Sign Language Converter",
  description: "AI-powered Indian Sign Language (ISL) translation platform for inclusive communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
        style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
