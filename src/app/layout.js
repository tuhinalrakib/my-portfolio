import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AosInit from "./components/AosInit";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Tuhin Al Rakib",
    template: "%s || Frontend Developer"
  },
  keywords: ['Frontend Developer', 'MERN Stack Developer', 'Software Engineer'],
  description: "I am a frontend Developer by using MERN Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          <ThemeProvider>
            <AosInit />
            {children}
          </ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
