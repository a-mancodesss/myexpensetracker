import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" >
          <body className={` antialiased`}>
            <main className="flex flex-col justify-between sm:w-4/5 sm:mx-auto min-h-screen py-4 px-4">
              <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <Navbar />
              <section>

                {children}
                </section>
              <Footer />
              </ThemeProvider>
            </main>
          </body>
      </html>
  );
}
