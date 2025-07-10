import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import KeenSlider from 'keen-slider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to NASA's Mars Rover",
  description: "See what nasa does on Mars!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
      <main className={"py-20 max-w-6xl mx-auto"}>
          {children}
      </main>
      {/*<nav>*/}
          {/*<Link href="/"><h1>*/}
          {/*  Home*/}
          {/*</h1></Link>*/}
          {/*<Link href="/photos"><h1>*/}
          {/*  Photos*/}
          {/*</h1></Link>*/}
          {/*<Link href="/contact"><h1>*/}
          {/*  Contact*/}
          {/*</h1></Link>*/}
        {/*</nav>*/}
        {/*{children}*/}
      </body>
    </html>
  );
}
