import type { Metadata } from "next";
import { Anek_Telugu, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AnekTelugu = Anek_Telugu({
  subsets:["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Alexandre Casimir Dev Fullstack Beginner",
  description: "My portfolio created in 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} ${"font-sans h-full bg-background text-foreground"} antialiased`}> */}
        <body className={cn(
          geistSans.variable,
          geistMono.variable,
          AnekTelugu.variable, 
          "font-sans h-full bg-background text-foreground"
          )}
        >
        {children}
      </body>
    </html>
  );
}
