import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CircleQuestionMark } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recip.to",
  description: "Recip.to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-pink-100 to bg-purple-100`}
      >
        {/* <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold" >Recip.to</h1>
          <button className="text-sm p-3 border bg-amber-100 text-black border-amber-100 rounded-3xl">  <CircleQuestionMark /> How it works ?</button>
        </header> */}
        {children}
      </body>
    </html>
  );
}
