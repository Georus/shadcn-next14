import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import { ThemeProvider } from "@/components/Provider";
import Footer from "./Footer";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasa automation",
  description: "Welcome to your future automators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="bg-secondary">
              <Navbar />
            </header>
            <main className="md:container">{children}</main>
            <footer className="bg-secondary">
              <Footer />
            </footer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
