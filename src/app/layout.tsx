import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" >
          <body className={` antialiased  mx-auto px-2 sm:px-4`}>
            <main className="flex flex-col justify-between sm:w-4/5 sm:mx-auto min-h-screen py-4">
              <Navbar />
              <section>{children}</section>
              <Footer />
            </main>
          </body>
      </html>
  );
}
