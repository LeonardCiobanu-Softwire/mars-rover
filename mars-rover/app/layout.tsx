import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import KeenSlider from 'keen-slider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <Navbar />
          <main className={"py-20 max-w-6xl mx-auto"}>
              {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
