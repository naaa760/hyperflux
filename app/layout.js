import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Initialize AppKit outside of component

export const metadata = {
  title: "SBT Social Gallery",
  description: "AI-Generated Soulbound Token Social Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
